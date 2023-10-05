import { Metadata } from "next/types"
import NewArticle from "./newArticle"

export const metadata: Metadata = {
	title: 'NextExample | Create Article',
	description: 'Create a new article'
}

export default function Page() {
		return <NewArticle />
}
