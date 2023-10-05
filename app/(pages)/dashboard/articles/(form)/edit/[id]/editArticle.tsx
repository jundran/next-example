"use client"
import { useEffect, useState } from "react"
import ArticleForm from "../../articleForm/articleForm"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { ArticleFormEvent } from "@/types/app"

export default function EditArticle({ id }: { id: string }) {
	const [article, setArticle] = useState<Article | null>(null)
	const router = useRouter()
	async function handleSubmit(e: ArticleFormEvent) {
		e.preventDefault()
		const supabase = createClientComponentClient()
		const { data: { session } } = await supabase.auth.getSession()
		const user = session?.user
		if (!user) throw new Error('Logged in user not found')

		const target = e.target

		let imageName = article.image_src
		const file = target.image.files[0]
		if (file) {
			imageName = `${Date.now()}-${file.name}`
			const { error: uploadError } = await supabase.storage
				.from('articles')
				.upload(imageName,  target.image.files[0])

			if (uploadError) {
				if (uploadError.name = 'Payload too large') {
					throw alert ('Article image must be less than 1 MB')
				}
				throw alert (uploadError.message)
			}
		}

		const { error } = await supabase.from('articles')
			.update({
				image_src: imageName,
				article_title: target.article_title.value ,
				summary: target.summary.value,
				body: target.body.value
			})
			.eq('id', article.id)

		if (error) {
			console.error(error)
			throw new Error('Could not create article.')
		}

		const redirectTo = `/dashboard/articles/${id}`
		router.refresh()
		router.push(redirectTo)
	}

	useEffect(() => {
		async function getData() {
			const supabase = createClientComponentClient<Database>()
			const { data, error } = await supabase.from('articles')
				.select()
				.eq('id', id)
				.single()

			if (data) setArticle(data)
			if (error) throw new Error(error.message)
		}
		getData()
	}, [id])

	return <ArticleForm handleSubmit={handleSubmit} article={article} />
}
