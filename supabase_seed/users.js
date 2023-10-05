import bcrypt from 'bcryptjs'

const alice = {
	name: 'Alice Jones',
	email: 'alice@example.com',
	image: {
		src: '/images/users/alice.png',
		width: 800,
		height: 800
	},
	password: await bcrypt.hash('password', 10)
}

const bob = {
	name: 'Bob Smith',
	email: 'bob@example.com',
	image: {
		src: '/images/users/bob.png',
		width: 800,
		height: 800
	},
	password: await bcrypt.hash('password', 10)
}

const charlie = {
	name: 'Charlie Foo',
	email: 'charlie@example.com',
	image: {
		src: '/images/users/charlie.png',
		width: 638,
		height: 638
	},
	password: await bcrypt.hash('password', 10)
}

const debra = {
	name: 'Debra Bar',
	email: 'debra@example.com',
	image: {
		src: '/images/users/debra.png',
		width: 394,
		height: 394
	},
	password: await bcrypt.hash('password', 10)
}

const edward = {
	name: 'Edward Knight',
	email: 'edward@example.com',
	image: {
		src: '/images/users/edward.png',
		width: 639,
		height: 639
	},
	password: await bcrypt.hash('password', 10)
}

const users = [alice, bob, charlie, debra, edward]

export default users
