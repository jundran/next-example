"use client"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import SignUpForm from "./signupForm"
import style from '../page.module.css'

export default function SignUpPage() {
	const router = useRouter()
	const [error, setError] = useState<string>('')

  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const supabase = createClientComponentClient()
    const { data, error } = await supabase.auth.signUp({
			email: e.currentTarget.email.value,
			password: e.currentTarget.password.value,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
				data: {
					full_name: e.currentTarget.fullname.value,
					avatar_url: '/default-profile-picture.png'
				}
      }
    })
		if (data) console.log(data)
    if (error) setError(error.message)
    else router.push('/verify')
  }

	return (
    <main>
			<div className={style.container}>
				<h1>Create an Account</h1>
				<h2>Sign up to see the dashboard</h2>
				<SignUpForm error={error} handleSubmit={handleSubmit} />
				<Link className={style.changeFormLink} href='/login'>
					Log in to existing account instead
				</Link>
			</div>
    </main>
  )
}
