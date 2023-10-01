import Link from "next/link"
import ThemeToggle from '@/components_client/themeToggle/themeToggle'
import style from './header.module.css'
import MobileMenu from '@/components_client/header_mobile/headerMobile'
import { LinkData } from "@/types/app"

const links: LinkData[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Articles",
    url: "/articles",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  // {
  //   id: 6,
  //   title: "Dashboard",
  //   url: "/dashboard",
  // }
]

export default function Header () {
	return (
		<>
			<header className={`${style.container} tablet-never`}>
				<div className={`container ${style.content}`}>
					<Link className='menu-link' href='/home'>NextExample</Link>
					<div className={style.right}>
						<ThemeToggle />
						<nav>
							{links.map(link => <Link key={link.id} className='menu-link' href={link.url}>
								{link.title}
							</Link>
							)}
						</nav>
					</div>
				</div>
			</header>
			<MobileMenu layoutClass='tablet-only' links={links} />
		</>
	)
}
