import { Metadata } from 'next/types'
import style from './page.module.css'
import Image from 'next/image'
import ContactImage from '~/public/images/contact.jpg'
import Form from '@/components_client/contactForm/contactform'

export const metadata: Metadata = {
  title: 'NextExample | Contact',
  description: 'Send us a message'
}

export default function Contact() {
  return (
    <main>
			<h1 className={style.title}>Let&apos;s Keep in Touch</h1>
			<div className={style.container}>
				<Image className={style.image} src={ContactImage} alt='contact' priority={true} />
				<Form />
			</div>
    </main>
  )
}

