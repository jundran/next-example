import { type FormEvent } from "react"

export type Image = {
	src: string
	width: number
	height: number
}

export type CategoryName =  'art' | 'sports' | 'gadgets'

export type CategoryItem = {
	id: string
	title: string
	text: string
	image: Image
}

export type LinkData = {
	id: number
	title: string,
	url: string,
}

export type FormProps = {
	error: String
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export type ArticleFormEvent = React.FormEvent<HTMLFormElement> & {
	target: {
		image: { files: FileList }
		article_title: { value: string }
		summary: { value: string }
		body: { value: string }
	}
}

export type DeleteArticleProps = {
	id: string
	redirectTo: string
	type?: 'button'
}
