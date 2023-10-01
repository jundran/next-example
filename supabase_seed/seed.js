import supabase from './supabaseClient.js'
import articles from './articles.js'
import users from './users.js'

const userData = await Promise.all(users.map(async user => {
	const { data, error } = await supabase
		.from('users')
		.insert([user])

	if (error) {
		console.error('Error', error)
	}
	if (data) {
		return data
	}
}))

console.log('User data', userData)

const articleData = await Promise.all(articles.map(async article => {
	const { data, error } = await supabase
		.from('articles')
		.insert([article])

	if (error) {
		console.error('Error', error)
	}
	if (data) {
		return data
	}
}))

console.log('Article data', articleData)
