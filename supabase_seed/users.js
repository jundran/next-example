import bcrypt from 'bcryptjs'

const alice = {
	name: 'Alice Jones',
	email: 'alice@example.com',
	image: '/images/users/alice.png',
	password: await bcrypt.hash('password', 10)
}

const bob = {
	name: 'Bob Smith',
	email: 'bob@example.com',
	image: '/images/users/bob.png',
	password: await bcrypt.hash('password', 10)
}

const charlie = {
	name: 'Charlie Foo',
	email: 'charlie@example.com',
	image: '/images/users/charlie.png',
	password: await bcrypt.hash('password', 10)
}

const debra = {
	name: 'Debra Bar',
	email: 'debra@example.com',
	image: '/images/users/debra.png',
	password: await bcrypt.hash('password', 10)
}

const edward = {
	name: 'Edward Knight',
	email: 'edward@example.com',
	image: '/images/users/edward.png',
	password: await bcrypt.hash('password', 10)
}

const users = [alice, bob, charlie, debra, edward]

export default users
