import { createSupabaseServerClient } from "@/utils/supabase-server"
import { notFound } from "next/navigation"
import Article from "@/components/article/article"

export async function generateMetadata({ params }: { params: { id: string } }) {
	const data = await getArticleData(params.id)
	if (!data) notFound()
  return {
		title: `NextExample | Article | ${data.article_title}`,
		description: `Read our awesome article titled: ${data.article_title}`
  }
}

export async function getArticleData(id: string) {
	const supabase = createSupabaseServerClient()
	console.log(`Fetching article with id ${id} from supabase`)
	const { data, error } = await supabase
		.from('articles')
		.select('*, author: profiles(full_name, user_name)')
		.eq('id', id)
		.single()

	if (error) notFound()
	return data
}

export default async function SingleArticlePage({ params }: { params: { id: string } }) {
	const data = await getArticleData(params.id)
	return (
		<main>
			<Article data={data} />
		</main>
	)
}
