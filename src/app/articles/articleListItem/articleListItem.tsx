import Image from "next/image"
import Link from "next/link"
import { Article } from "@/types/app"
import style from './articleListItem.module.css'

export default async function ArticleListItem ({ data, index }: { data: Article, index: number }) {
	return (
		<Link className={`${style.container} link-unstyled`} href={`/articles/${data.id}`}>
			<h2 className="mobile-only">{data.title}</h2>
			<Image
				className={style.image} src={data.image.src} alt={data.title}
				width={data.image.width} height={data.image.height}
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
