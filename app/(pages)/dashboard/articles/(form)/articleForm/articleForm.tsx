"use client"
import Link from "next/link"
import style from './articleForm.module.css'

type Props = {
	handleSubmit: React.FormEventHandler<HTMLFormElement>
	article?: Article
}
export default function ArticleForm({ handleSubmit, article }: Props) {

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<ul className="ul-unstyled">
				<li className="form-field">
					<label className="label" htmlFor="article_title">Title</label>
					<input className="input" id="article_title" name="article_title" required minLength={4} defaultValue={article?.article_title}/>
				</li>
				<li className="form-field">
					<label className="label" htmlFor="image">{article ? 'Replace Image' : 'Image'}</label>
					<input className="input" type="file" id="image" name="image" required={!article} />
				</li>
				<li className="form-field">
					<label className="label" htmlFor="summary">Summary</label>
					<textarea className={`input ${style.summary}`} id="summary" name="summary" required minLength={10} defaultValue={article?.summary}/>
				</li>
				<li className="form-field">
					<label className="label" htmlFor="body">Body</label>
					<textarea className={`input ${style.body}`} id="body" name="body" required minLength={10} defaultValue={article?.body}/>
				</li>
				<li className={style.header}>
					<button type="submit">Save</button>
					<Link className="link-button" href='/dashboard/articles'>Cancel</Link>
				</li>
			</ul>
		</form>
	)
}
