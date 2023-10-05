import supabase from "@/config/supabaseClient"
import { notFound } from "next/navigation"
import Article from "../article/article"

export async function generateMetadata({ params }: { params: { id: string } }) {
	const data = await getData(params.id)
	if (!data) return  notFound()
  return {
		title: `NextExample | Article | ${data.title}`,
		description: `Read our awesome article titled: ${data.title}`
  }
}

export async function generateStaticParams() {
	console.log(`Fetching articles from supabase to generate static params`)
	const { data, error } = await supabase
		.from('articles')
		.select()
		.order('created_at', { ascending: false })

	if (error) throw new Error('Unable to fetch articles from supabase')
 	return data.map(article => ({ id: article.id.toString() }))
}

// TODO - extract into API route to use caching
// should hopefully avoid double call to getData for meta and RFC
async function getData(id: string) {
	console.log(`Fetching article with id ${id} from supabase`)
	const { data, error } = await supabase
		.from('articles')
		.select()
		.eq('id', id)
		.single()

	if (error) notFound() // Will redirect and not return
	return data
}

export default async function SingleArticlePage({ params }: { params: { id: string } }) {
	const data = await getData(params.id)
	return (
		<main>
			<Article data={data} />
		</main>
	)
}
