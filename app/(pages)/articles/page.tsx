import { notFound } from "next/navigation"
import { Metadata } from "next/types"
import ArticleListItem from "@/components/articleListItem/articleListItem"
import style from './page.module.css'
import { createSupabaseServerClient } from "@/utils/supabase-server"

export const metadata: Metadata = {
  title: 'NextExample | Articles',
  description: 'A List of our articles'
}

async function getData() {
	const supabase = createSupabaseServerClient()
	console.log(`Fetching articles from supabase`)
	const { data, error } = await supabase
		.from('articles')
		.select('*, author: profiles(full_name, user_name)')
		.order('created_at', { ascending: false })

	if (error) {
		console.log(error)
		notFound()
	}
	return data
}

export default async function ArticlePage() {
	const articles = await getData()
	return (
		<main className={style.container}>
			{articles.length ?
				articles.map((data, index) =>
					<ArticleListItem key={data.id} data={data} index={index} />
				) :
				<h2>There are no articles to show</h2>
			}
		</main>
	)
}
