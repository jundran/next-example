"use client"
import { FormEvent, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import style from '../page.module.css'
import LoginForm from "./loginForm"
import githubLogo from '~/public/images/github-logo.png'

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

	async function handleGitHubLogin() {
		const supabase = createClientComponentClient()
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    })
	}

	return (
    <main>
			<div className={style.container}>
				<h1>Welcome Back</h1>
				<h2>Log in to see the dashboard</h2>
				<h3>Login With GitHub</h3>
				<button className={`${style.githubLoginButton} button-unstyled`} onClick={handleGitHubLogin}>
					<Image src={githubLogo} alt='github logo'/>
				</button>

				<h3>Login With Username and Password</h3>
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
