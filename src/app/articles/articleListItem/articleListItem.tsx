import { Article } from "@/types/app"
import Image from "next/image"
import style from './articleListItem.module.css'
import { getImageData } from "@/utils/image"
import Link from "next/link"

export default async function ArticleListItem ({ data, index }: { data: Article, index: number }) {
	const imageData = await getImageData(data.image)
	return (
		<Link className={`${style.container} link-unstyled`} href={`/articles/${data.id}`}>
			<h2 className="mobile-only">{data.title}</h2>
			<Image
				className={style.image} src={data.image} alt={data.title}
				width={imageData.width} height={imageData.height}
				priority={index === 0}
			/>
			<div>
				<h2 className="mobile-never">{data.title}</h2>
				<p className={style.summary}>{data.summary}</p>
				<p className={style.author}>{data.author.name}</p>
			</div>
		</Link>
	)
}
