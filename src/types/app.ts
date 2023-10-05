// TODO - ideally when user uploads image
// extract width and height when saving
export type Image = {
	src: string
	width: number
	height: number
}

export type User = {
	id: number
  name: string
	email: string
	image: Image
	password: string
}

export type Article = {
	id: number
	title: string
	image: Image
	summary: string
	text: string
	// TODO - change to User type when using foreign key
	author: { name: string }
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
