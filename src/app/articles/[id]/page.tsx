import supabase from "@/config/supabaseClient"
import { notFound } from "next/navigation"
import Article from "../article/article"

// TODO - avoid double call to getData for meta and RFC
export async function generateMetadata({ params }: { params: { id: string } }) {
	const data = await getData(params.id)
	if (!data) return  notFound()
  return {
		title: `NextExample | Article | ${data.title}`,
		description: `Read our article - ${data.title}`
  }
}

async function getData(id: string) {
	console.log(`Fetching article with id ${id} from supabase`)
	const { data, error } = await supabase
		.from('articles')
		.select()
		.eq('id', id)
		.single()

	if (error) console.error(error)
	return data
}

export default async function SingleArticlePage({ params }: { params: { id: string } }) {
	const data = await getData(params.id)
	// TODO - create custom not-found file for whole app as provided one has
	// the height of the window, going under the header but pushing down the footer
	// https://nextjs.org/docs/app/api-reference/file-conventions/not-found
	if (!data) return notFound()
	return (
		<main>
			<Article data={data} />
		</main>
	)
}
