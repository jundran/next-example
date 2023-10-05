import { notFound } from 'next/navigation'
import Image from 'next/image'
import portfolioData from '@/data/portfolio'
import { CategoryItem, CategoryName } from '@/types/app'
import { capitalize } from '@/utils/format'
import style from './page.module.css'

export function generateMetadata({ params }: { params: { category: CategoryName } }) {
  return {
		title: `NextExample | Portfolio | ${capitalize(params.category)}`,
		description: `A list of portfolio items about ${capitalize(params.category)}`
  }
}

function getData(cat: CategoryName) {
	const data = portfolioData[cat]
	if (!data) notFound()
	return data
}

export default function Category({ params }: { params: { category: CategoryName } }) {
	const cat = params.category
	const data = getData(cat)

	return (
		<>
			<h2 className={style.categoryTitle}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</h2>
			{data.map(item => <PortfolioItem key={item.id} data={item} />)}
		</>
	)
}

async function PortfolioItem ({ data }: { data: CategoryItem }) {
	return (
		<div className={style.item}>
			<h2 className='mobile-only'>{data.title}</h2>
			<Image
				className={style.image} src={data.image.src} alt={data.title}
				width={data.image.width} height={data.image.height}
			/>
			<div>
				<h2 className='mobile-never'>{data.title}</h2>
				<p>{data.text}</p>
			</div>
		</div>
	)
}
