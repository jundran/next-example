"use client"
import { ArticleFormEvent } from "@/types/app"
import ArticleForm from "../articleForm/articleForm"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

export default function NewArticle() {
	const router = useRouter()

	async function handleSubmit(e: ArticleFormEvent) {
		e.preventDefault()
		const supabase = createClientComponentClient()
		const { data: { session } } = await supabase.auth.getSession()
		const user = session?.user
		if (!user) throw new Error('Logged in user not found')

		const target = e.target

		const imageName = `${Date.now()}-${target.image.files[0].name}`
		const { error: uploadError } = await supabase.storage
			.from('articles')
			.upload(imageName, target.image.files[0])

		if (uploadError) {
			if (uploadError.name = 'Payload too large') {
				throw alert ('Article image must be less than 1 MB')
			}
			throw alert (uploadError.message)
		}

		const { error } = await supabase.from('articles')
			.insert({
				user_id: user.id,
				image_src: imageName,
				article_title: target.article_title.value,
				summary: target.summary.value,
				body: target.body.value
			})

		if (error) throw alert(error.message)

		const redirectTo = '/dashboard/articles/'
		router.refresh()
		router.push(redirectTo)
	}

	return <ArticleForm handleSubmit={handleSubmit}/>
}
