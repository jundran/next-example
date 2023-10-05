import type { ReactNode } from "react"
import Link from "next/link"
import { redirect } from "next/navigation"
import style from './layout.module.css'
import getLoggedInUser from "@/utils/auth"

export default async function DashboardLayout({ children }: { children: ReactNode}) {
	const user = await getLoggedInUser()
	if (!user) redirect('/login')

  return (
    <main>
			<h1>Dashboard</h1>
			<nav className={style.menu}>
				<Link href="/dashboard/profile">Profile</Link>
				<Link href="/dashboard/articles">Articles</Link>
			</nav>
			{children}
    </main>
  )
}
