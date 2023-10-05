import { LoremIpsum } from 'lorem-ipsum'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 10,
    min: 6
  },
  wordsPerSentence: {
    max: 14,
    min: 9
  }
})

const getSummary = () =>  lorem.generateSentences(4)
const getDescription = () =>  lorem.generateParagraphs(6)

const spaceStation = {
	author: { name: 'Alice Jones' },
	title: 'Space Station and Beyond',
	image: {
		src: '/images/articles/spaceStation.jpg',
		width: 1080,
		height: 810
	},
	summary: getSummary(),
	text: getDescription()
}

const dolphins = {
	author: { name: 'Bob Smith' },
	title: 'Dolphins and the Ocean',
	image: {
		src: '/images/articles/dolphins.jpg',
		width: 1080,
		height: 708
	},
	summary: getSummary(),
	text: getDescription()
}

const farm = {
	author: { name: 'Claire Foo' },
	title: 'Farming and the Countryside',
	image: {
		src: '/images/articles/farm.jpg',
		width: 1080,
		height: 720
	},
	summary: getSummary(),
	text: getDescription()
}

const yaught = {
	author: { name: 'Debra Bar' },
	title: 'Running and the Race for Health',
	image: {
		src: '/images/articles/running.jpg',
		width: 1080,
		height: 718
	},
	summary: getSummary(),
	text: getDescription()
}

const running = {
	author: { name: 'Edward Knight' },
	title: 'Sailing and the Life of Luxury',
	image: {
		src: '/images/articles/yaught.jpg',
		width: 1080,
		height: 717
	},
	summary: getSummary(),
	text: getDescription()
}

const highlands = {
	author: { name: 'Alice Jones' },
	title: 'The Scottish Highlands and Mountains',
	image: {
		src: '/images/articles/highlands.jpg',
		width: 640,
		height: 480
	},
	summary: getSummary(),
	text: getDescription()
}

const articles = [
	spaceStation,
	dolphins,
	farm,
	yaught,
	running,
	highlands
]

export default articles
