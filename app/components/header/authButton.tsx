import Link from "next/link"
import getLoggedInUser from "@/utils/auth"
import LogoutButton from "../logoutButton/LogoutButton"

export default async function AuthButton() {
	const user = await getLoggedInUser()

	return (
		<>
			{user ?
				<LogoutButton />
				:
				<Link className="menu-link" href='/login'>
					Login
				</Link>
			}
		</>
	)
}
