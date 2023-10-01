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
	image: '/images/articles/spaceStation.jpg',
	summary: getSummary(),
	text: getDescription()
}

const dolphins = {
	author: { name: 'Bob Smith' },
	title: 'Dolphins and the Ocean',
	image: '/images/articles/dolphins.jpg',
	summary: getSummary(),
	text: getDescription()
}

const farm = {
	author: { name: 'Claire Foo' },
	title: 'Farming and the Countryside',
	image: '/images/articles/farm.jpg',
	summary: getSummary(),
	text: getDescription()
}

const yaught = {
	author: { name: 'Debra Bar' },
	title: 'Running and the Race for Health',
	image: '/images/articles/running.jpg',
	summary: getSummary(),
	text: getDescription()
}

const running = {
	author: { name: 'Edward Knight' },
	title: 'Sailing and the Life of Luxury',
	image: '/images/articles/yaught.jpg',
	summary: getSummary(),
	text: getDescription()
}

const highlands = {
	author: { name: 'Alice Jones' },
	title: 'The Scottish Highlands and Mountains',
	image: '/images/articles/highlands.jpg',
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
