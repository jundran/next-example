"use client"
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function LogoutButton({ onClick }: { onClick?: () => void }) {
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signOut()

    if (!error) {
			router.refresh()
      router.push('/login')
    }
  }

  return (
    <button onClick={() => {
				handleLogout()
				if (onClick) onClick()
			}}
			className='button-unstyled menu-link'
		>
      Logout
    </button>
  )
}
