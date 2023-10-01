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
		image: '/images/portfolio/art/sheep.jpg'
	},
	{
		id: crypto.randomUUID(),
		title: 'Museum',
		text: getText(),
		image: '/images/portfolio/art/museum.jpg'
	},
	{
		id: crypto.randomUUID(),
		title: 'Valley',
		text: getText(),
		image: '/images/portfolio/art/valley.jpg'
	}
]

const gadgets: CategoryItem[] = [
	{
		id: crypto.randomUUID(),
		title: 'Headphones',
		text: getText(),
		image: '/images/portfolio/gadgets/headphones.jpg'
	},
	{
		id: crypto.randomUUID(),
		title: 'Drone',
		text: getText(),
		image: '/images/portfolio/gadgets/drone.jpg'
	},
	{
		id: crypto.randomUUID(),
		title: 'Playstation',
		text: getText(),
		image: '/images/portfolio/gadgets/playstation.jpg'
	}
]

const sports: CategoryItem[] = [
	{
		id: crypto.randomUUID(),
		title: 'Paragliding',
		text: getText(),
		image: '/images/portfolio/sports/paragliding.jpg'
	},
	{
		id: crypto.randomUUID(),
		title: 'Skiing',
		text: getText(),
		image: '/images/portfolio/sports/skiing.jpg'
	},
	{
		id: crypto.randomUUID(),
		title: 'Mountain Biking',
		text: getText(),
		image: '/images/portfolio/sports/mountain-biking.jpg'
	}
]

const data: Record<CategoryName, CategoryItem[]>  = {
	art,
	sports,
	gadgets
}

export default data
