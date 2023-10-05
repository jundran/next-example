import { ReactNode } from 'react'
import style from './page.module.css'

export default function layout({ children }: { children : ReactNode }) {
	return (
		<main>
			<h1 className={style.mainTitle}>Our Works</h1>
			{children}
		</main>
	)
}
