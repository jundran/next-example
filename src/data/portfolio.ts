import { LoremIpsum } from 'lorem-ipsum'
import { CategoryItem, CategoryName } from '../types/app'

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 15,
    min: 10
  }
})

const getText = () =>  lorem.generateSentences(4)

const art: CategoryItem[] = [
	{
		id: crypto.randomUUID(),
		title: 'Sheep',
		text: getText(),
		image: {
			src: '/images/portfolio/art/sheep.jpg',
			width: 640,
			height: 517
		}
	},
	{
		id: crypto.randomUUID(),
		title: 'Museum',
		text: getText(),
		image: {
			src: '/images/portfolio/art/museum.jpg',
			width: 640,
			height: 427
		}
	},
	{
		id: crypto.randomUUID(),
		title: 'Valley',
		text: getText(),
		image: {
			src: '/images/portfolio/art/valley.jpg',
			width: 640,
			height: 434
		}
	}
]

const gadgets: CategoryItem[] = [
	{
		id: crypto.randomUUID(),
		title: 'Headphones',
		text: getText(),
		image: {
			src: '/images/portfolio/gadgets/headphones.jpg',
			width: 640,
			height: 427
		}
	},
	{
		id: crypto.randomUUID(),
		title: 'Drone',
		text: getText(),
		image: {
			src: '/images/portfolio/gadgets/drone.jpg',
			width: 640,
			height: 427
		}
	},
	{
		id: crypto.randomUUID(),
		title: 'Playstation',
		text: getText(),
		image: {
			src: '/images/portfolio/gadgets/playstation.jpg',
			width: 640,
			height: 427
		}
	}
]

const sports: CategoryItem[] = [
	{
		id: crypto.randomUUID(),
		title: 'Paragliding',
		text: getText(),
		image: {
			src: '/images/portfolio/sports/paragliding.jpg',
			width: 640,
			height: 427
		}
	},
	{
		id: crypto.randomUUID(),
		title: 'Skiing',
		text: getText(),
		image: {
			src: '/images/portfolio/sports/skiing.jpg',
			width: 640,
			height: 424
		}
	},
	{
		id: crypto.randomUUID(),
		title: 'Mountain Biking',
		text: getText(),
		image: {
			src: '/images/portfolio/sports/mountain-biking.jpg',
			width: 640,
			height: 427
		}
	}
]

const data: Record<CategoryName, CategoryItem[]>  = {
	art,
	sports,
	gadgets
}

export default data
