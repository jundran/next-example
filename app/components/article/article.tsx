import Image from "next/image"
import style from './article.module.css'
import DeleteButton from "../deleteButton"
import Link from "next/link"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

type Props = {
	data: Article
	edit?: boolean
}
export default async function Article (props: Props) {
	const { data: originalData, edit } = props
	const supabase = createClientComponentClient()
	const { data: { publicUrl } } = supabase.storage.from('articles')
		.getPublicUrl(originalData.image_src)
	const data = {
		...originalData,
		image_src: publicUrl
	}

	return (
		<div className={style.container}>
			<div className={style.header}>
				<div className={style.headerContent}>
					<h2 className={style.title}>{data.article_title}</h2>
					<p className={style.summary}>{data.summary}</p>
					{edit ?
						<div className={style.editContainer}>
							<p className={style.author}>{data.author.full_name}</p>
							<Link className='link-button' href={`/dashboard/articles/edit/${data.id}`}>Edit</Link>
							<DeleteButton id={data.id} redirectTo='/dashboard/articles' />
						</div>
						:
						<p className={style.author}>{data.author.full_name}</p>
					}
				</div>
				<Image
					className={style.image} src={data.image_src} alt={data.article_title}
					width={600} height={600}
					priority={true}
				/>
			</div>
			<p className={style.body}>{data.body}</p>
		</div>
	)
}
