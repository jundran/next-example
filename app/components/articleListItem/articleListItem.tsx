import Image from "next/image"
import Link from "next/link"
import style from './articleListItem.module.css'
import DeleteButton from "../deleteButton"
import { createSupabaseServerClient } from "@/utils/supabase-server"

type Props = {
	data: ArticleWithAuthor
	index: number
	userOwnsArticle?: boolean
}
export default async function ArticleListItem (props: Props) {
	const { data, userOwnsArticle } = props

	return (
		<>
			{userOwnsArticle ?
				<div className={`${style.container}`}>
					<InnerJSX {...props} />
				</div>
				:
				<Link className={`${style.container} link-unstyled`} href={`/articles/${data.id}`}>
					<InnerJSX {...props} />
				</Link>
			}
		</>
	)
}

function InnerJSX(props: Props) {
	const { data: originalData, index, userOwnsArticle } = props

	const supabase = createSupabaseServerClient()
	const { data: { publicUrl } } = supabase.storage.from('articles')
		.getPublicUrl(originalData.image_src)
	const data = {
		...originalData,
		image_src: publicUrl
	}

	return (
		<>
			<h2 className="mobile-only">{data.article_title}</h2>
			<Image
				className={style.image} src={data.image_src} alt={data.article_title}
				width={600} height={600} priority={index === 0}
			/>
			<div>
				<h2 className="mobile-never">{data.article_title}</h2>
				<p className={style.summary}>{data.summary}</p>
				<p className={style.author}>{data.author.full_name || data.author.user_name}</p>
				{userOwnsArticle &&
					<div className={style.buttons}>
						<Link className='link-button' href={`/dashboard/articles/${data.id}`}>View</Link>
						<Link className='link-button' href={`/dashboard/articles/edit/${data.id}`}>Edit</Link>
						<DeleteButton
							id={data.id}
							redirectTo={userOwnsArticle ? '/dashboard/articles' : '/articles'}
						/>
					</div>
				}
			</div>
		</>
	)
}
