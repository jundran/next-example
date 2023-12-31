"use client"
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/themeToggle'
import { LinkData } from '@/types/app'
import style from './headerMobile.module.css'
import AuthButton from '../authButton'
import { User } from '@supabase/auth-helpers-nextjs'

type HamburgerProps = {
	showMenu: boolean
	setShowMenu: () => void
}
function Hamburger ({ setShowMenu }: HamburgerProps) {
	return (
		<button className={style.hamburger} onClick={setShowMenu}>
			<span />
		</button>
	)
}

type Props = {
	layoutClass: string
	links: LinkData[]
	user: User | null
}

export default function MobileMenu ({ layoutClass, links, user }: Props ) {
	const [showMenu, setShowMenu] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (showMenu) {
			Array.from(menuRef.current!.children)
				.forEach(child => (child as HTMLElement).inert = false)
		} else {
			Array.from(menuRef.current!.children)
				.forEach(child => (child as HTMLElement).inert = true)
		}
	}, [showMenu])

	return (
		<header className={`${style.container} ${layoutClass}`}>
			<div className={style.menu}>
				<Hamburger showMenu={showMenu} setShowMenu={() => setShowMenu(!showMenu)} />
				<div className={style.right}>
					<Link className='menu-link' href='/'>NextExample</Link>
					<ThemeToggle />
				</div>
			</div>
			<div className={`${style.dropdown} ${showMenu && style.open}`} ref={menuRef}>
				{links.map(link =>
					<Link key={link.id} href={link.url} onClick={() => setShowMenu(false)}>
						{link.title}
					</Link>
				)}
				<AuthButton user={user} onClick={() => setShowMenu(false)}/>
				<button onClick={() => setShowMenu(false)}>Close</button>
			</div>
		</header>
	)
}
