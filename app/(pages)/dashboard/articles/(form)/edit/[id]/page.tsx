import { Metadata } from "next/types"
import EditArticle from "./editArticle"

export const metadata: Metadata = {
	title: 'NextExample | Edit Article',
	description: 'Edit your new article'
}

export default function Page({ params }: {params: { id: string } }) {
		return <EditArticle id={params.id}/>
}
