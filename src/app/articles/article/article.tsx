import Image from "next/image"
import { Article } from "@/types/app"
import style from './article.module.css'

export default async function Article ({ data }: { data: Article }) {
	return (
		<div className={style.container}>
			<div className={style.header}>
				<div className={style.headerContent}>
					<h2 className={style.title}>{data.title}</h2>
					<p className={style.summary}>{data.summary}</p>
					<p className={style.author}>{data.author.name}</p>
				</div>
				<Image
					className={style.image} src={data.image.src} alt={data.title}
					width={data.image.width} height={data.image.height}
					priority={true}
				/>
			</div>
			<p className={style.text}>{data.text}</p>
		</div>
	)
}
