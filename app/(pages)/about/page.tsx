import Image from 'next/image'
import train from '~/public/images/train.png'
import style from './page.module.css'
import Link from 'next/link'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'NextExample | About',
  description: 'About this app'
}

export default function About() {
  return (
    <main>
			<div className={style.imageContainer}>
				<Image className={style.image} src={train} alt="train" priority={true} />
				<div className={style.textbox}>
					<p className={style.title}>Train Over Bridge</p>
					<p className={style.subtext}>A long journey for all passengers surviving on Snowpiercer</p>
				</div>
			</div>
			<div className={style.content}>
				<div>
					<h2 className={style.title}>About this site</h2>
					<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae. A suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet?
					</p>
				</div>
				<div>
					<h2 className={style.title}>Learning new stuff</h2>
					<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<ul className={style.list}>
						<li>Next JS</li>
						<li>Supabase</li>
						<li>Mobile Friendly</li>
						<li>Cool images</li>
					</ul>
					<Link className='link-button' href='/contact'>Contact</Link>
				</div>
			</div>
    </main>
  )
}
