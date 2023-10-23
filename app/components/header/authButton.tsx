import Link from "next/link"
import LogoutButton from "../logoutButton/LogoutButton"
import { User } from "@supabase/supabase-js"

export default function AuthButton({ user, onClick }: { user: User | null, onClick?: () => void }) {
	return (
		<>
			{user ?
				<LogoutButton onClick={onClick} />
				:
				<Link onClick={onClick} className="menu-link" href='/login'>
					Login
				</Link>
			}
		</>
	)
}
