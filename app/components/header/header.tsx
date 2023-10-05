import Link from "next/link"
import ThemeToggle from '@/components/header/themeToggle/themeToggle'
import style from './header.module.css'
import MobileMenu from './header_mobile/headerMobile'
import { LinkData } from "@/types/app"
import getLoggedInUser from "@/utils/auth"
import AuthButton from "./authButton"

const linksLoggedOut: LinkData[] = [
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
  }
]

const linksLoggedIn = [
	...linksLoggedOut,
	{
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  }
]

export default async function Header () {
	const user = await getLoggedInUser()
	const links = user ? linksLoggedIn : linksLoggedOut

	return (
		<>
			<header className={`${style.container} tablet-never`}>
				<div className={`container ${style.content}`}>
					<Link className='menu-link' href='/'>NextExample</Link>
					<div className={style.right}>
						<ThemeToggle />
						<nav>
							{links.map(link => <Link key={link.id} className='menu-link' href={link.url}>
								{link.title}
							</Link>
							)}
							<AuthButton />
						</nav>
					</div>
				</div>
			</header>
			<MobileMenu layoutClass='tablet-only' links={links} />
		</>
	)
}
