import notFound from "@/(pages)/articles/[id]/not-found"
import Article from "@/components/article/article"
import { getArticleData } from "@/(pages)/articles/[id]/page"

export async function generateMetadata({ params }: { params: { id: string } }) {
	const data = await getArticleData(params.id)
	if (!data) notFound()
  return {
		title: `NextExample | Article | ${data.article_title}`,
		description: `Your article: ${data.article_title}`
  }
}

export default async function SingleArticlePage({ params }: { params: { id: string } }) {
	const data = await getArticleData(params.id)
	return (
		<div>
			<Article data={data} edit={true} />
		</div>
	)
}
