import { createSupabaseServerClient } from "@/utils/supabase-server"
import { notFound, redirect } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next/types"
import ArticleListItem from "@/components/articleListItem/articleListItem"
import style from './page.module.css'

export const metadata: Metadata = {
  title: 'NextExample | Articles',
  description: 'A List of our articles'
}

async function getData() {
	const supabase = createSupabaseServerClient()
	const { data: { session } } = await supabase.auth.getSession()
	if (!session) redirect('/login')

	console.log(`Fetching articles from supabase`)
	const { data, error } = await supabase
		.from('articles')
		.select('*, author: profiles(full_name, user_name)')
		.eq('user_id', session.user.id)
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
		<div className={style.container}>
			<Link className='link-button' href="/dashboard/articles/new">Create new Article</Link>
			{articles.length ?
				articles.map((data, index) =>
					<ArticleListItem key={data.id} data={data} index={index} userOwnsArticle={true} />
				) :
				<h2>There are no articles to show</h2>
			}
		</div>
	)
}
