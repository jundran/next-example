import style from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next/types'
import art from '~/public/images/portfolio/art/art.jpg'
import gadgets from '~/public/images/portfolio/gadgets/gadgets.jpg'
import sports from '~/public/images/portfolio/sports/sports.jpg'

export const metadata: Metadata = {
  title: 'NextExample | Portfolio',
  description: 'See our works'
}

export default function Portfolio() {
  return (
    <>
			<h2>Choose a gallery</h2>
			<div className={style.cards}>
				<Link className={style.card} href='/portfolio/art'>
					<Image src={art} alt='art category'/>
					<p>Art</p>
				</Link>
				<Link className={style.card} href='/portfolio/gadgets'>
					<Image src={gadgets} alt='gadget category'/>
					<p>Gadgets</p>
				</Link>
				<Link className={style.card} href='/portfolio/sports'>
					<Image src={sports} alt='sports category'/>
					<p>Sports</p>
				</Link>
			</div>
    </>
  )
}
