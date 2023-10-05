import style from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'NextExample | Home',
  description: 'Home page'
}

export default async function Home() {
  return (
    <main className={style.container}>
			<div>
				<h1 className={style.title}>NextExample website made with Next JS.</h1>
				<p className={style.subtitle}>
					This is a catchy subtitle for you to read that is underneath the title.
				</p>
				<CoolImage layoutClass={`${style.tabletOnly} tablet-only`}/>
				<Link className='link-button' href='/articles'>See Our Articles</Link>
			</div>
			<CoolImage layoutClass='tablet-never'/>
    </main>
  )
}

async function CoolImage({ layoutClass }: { layoutClass: string }) {
	const imageSrc = 'https://source.unsplash.com/1OtUkD_8svc'
	return (
		<Image
			className={`${style.image} ${layoutClass}`}
			src={imageSrc} alt='View of sky from bottom of canyon'
			width={1080} height={720} priority={true}
		/>
	)
}
