"use client"
import { FormEvent, useState, useRef } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import style from '../page.module.css'
import LoginForm from "./loginForm"

export default function LoginPage() {
	const router = useRouter()
	const userEmail = useRef()
	const [error, setError] = useState('')
	const [message, setMessage] = useState('')
	const [showLinkReset, setShowLinkReset] = useState(false)

  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
		setMessage('')
		const email = e.currentTarget.email.value
		const password = e.currentTarget.password.value
    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
			setError(error.message)
			if (error.message === 'Email not confirmed') {
				userEmail.current = email
				setShowLinkReset(true)
			}
		} else {
			router.refresh() // So that dashboard page updates, calling get session
			router.push('/dashboard')
		}
  }

	async function sendConfirmEmailLink () {
		if (!userEmail.current) throw new Error('User email not set')
		const supabase = createClientComponentClient()
		const { error } = await supabase.auth.resend({
			type: 'signup',
			email: userEmail.current,
		})
		if (error) setError(error.message)
		else {
			setError('')
			setMessage('Please check your email for new confirmation link')
		}
	}

	return (
    <main>
			<div className={style.container}>
				<h1>Welcome Back</h1>
				<h2>Log in to see the dashboard</h2>
				<LoginForm error={error} handleSubmit={handleSubmit} />
				<Link className={style.changeFormLink} href='/signup'>
					Create new account instead
				</Link>
				{showLinkReset &&
					<button style={{ marginTop: '20px' }} onClick={sendConfirmEmailLink}>
						Send new email confirmation Link
					</button>
				}
				{message && <p>{message}</p>}
			</div>
    </main>
  )
}
