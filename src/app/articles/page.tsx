import { notFound } from "next/navigation"
import ArticleListItem from "./articleListItem/articleListItem"
import style from './page.module.css'
import { Metadata } from "next/types"
import supabase from "@/config/supabaseClient"

export const metadata: Metadata = {
  title: 'NextExample | Articles',
  description: 'A List of our articles'
}

async function getData() {
	// TODO - remove for production
	await new Promise(resolve => setTimeout(resolve, 1000))	// Simulate loading delay

	console.log(`Fetching articles from supabase`)
	const { data, error } = await supabase
		.from('articles')
		.select()
		.order('created_at', { ascending: false })

	if (error) return notFound() // Will redirect and not return
	return data
}

export default async function ArticlePage() {
	const articles = await getData()
	return (
		<main className={style.container}>
			{articles.map((data, index) =>
				<ArticleListItem key={data.id} data={data} index={index} />)
			}
		</main>
	)
}
