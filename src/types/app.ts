export type User = {
	id: number
  name: string
	email: string
	image: string
	password: string
}

export type Article = {
	id: number
	title: string
	image: string
	summary: string
	text: string
	author: { name: string } // TODO - change to User type when using foreign key
}

export type CategoryName =  'art' | 'sports' | 'gadgets'

export type CategoryItem = {
	id: string
	title: string
	text: string
	image: string
}

export type LinkData = {
	id: number
	title: string,
	url: string,
}
