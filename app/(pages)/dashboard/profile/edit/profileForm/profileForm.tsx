"use client"
import { useState, useEffect } from "react"
import { User } from "@supabase/supabase-js"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { getUserProfileData, getAvatarPublicUrl } from "@/utils/fetch"
import Avatar from './avatar'
import style from './profileForm.module.css'

export default function ProfileForm({ user }: { user: User }) {
	const [loading, setLoading] = useState(true)
	const [fullname, setFullname] = useState('')
	const [username, setUsername] = useState('')
	const [avatarUrl, setAvatarUrl] = useState('')
	const [avatarPublicUrl, setAvatarPublicUrl] = useState('')
	const [emailMessage, setEmailMessage] = useState('')

	useEffect(() => {
		async function getData() {
			const data = await getUserProfileData(user.id)
			setFullname(data.full_name || data.user_name)
			setUsername(data.user_name) // user_name is provided by github
			setAvatarUrl(data.avatar_url)
			setLoading
		}
		getData()
	}, [user.id])

	useEffect(() => {
		if (!avatarUrl) return
		setAvatarPublicUrl(getAvatarPublicUrl(avatarUrl))
	}, [avatarUrl])

	function handleSubmitInformation(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		updateProfile(user.id, { full_name: fullname })
	}

	async function handleSubmitEmail(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setEmailMessage('')
		const newEmail = e.currentTarget.email.value.trim()
		if (!newEmail) return setEmailMessage('Email cannot be empty')
		const supabase = createClientComponentClient()
		const { data, error } = await supabase.auth.updateUser({email: newEmail})
		if (error) return setEmailMessage(error.message)
		if (!data.user.new_email) return setEmailMessage('Unable to update email')
		const message = `
			We have sent you a confirmation link to ${newEmail}. \
			You need to confirm the new email before it can be used.`
		setEmailMessage(message)
	}

	return (
		<div>
			<form className={style.textFields} onSubmit={handleSubmitInformation}>
				<h2>Information</h2>
				<ul className="ul-unstyled">
					<li className="form-field">
						<label htmlFor="fullname" className="label">Full name</label>
						<input
							className="input"
							id='fullname'
							value={fullname}
							onChange={e => setFullname(e.target.value)}
						/>
					</li>
				</ul>
				<button>Update Information</button>
			</form>
			{/* Can only change email if logged in with username and password
				and not third-party auth provider */}
			{!loading && !username &&
				<>
					<hr />
					<form className={style.textFields} onSubmit={handleSubmitEmail}>
						<h2>Email</h2>
						<ul className="ul-unstyled">
							<li className="form-field">
								<p>Email: {user.email}</p>
								<label htmlFor="email" className="label">Change Email</label>
								<input
									className="input"
									id='email'
									name='email'
								/>
								{emailMessage && <p>{emailMessage}</p>}
							</li>
						</ul>
						<button>Update Email</button>
					</form>
				</>
			}
			<hr />
			{avatarPublicUrl &&
				<Avatar
					userId={user.id}
					url={avatarPublicUrl}
					onUpload={url => {
						setAvatarUrl(url)
						updateProfile(user.id, { avatar_url: url })
					}}
				/>
			}
		</div>
	)
}

type profileFields = {
	full_name?: Profile['full_name']
	avatar_url?: Profile['avatar_url']
}
async function updateProfile(userId: string, fields: profileFields) {
	const supabase = createClientComponentClient()
	const { error } = await supabase.from('profiles')
		.update({
			...fields,
			updated_at: new Date().toISOString(),
		})
		.eq('id', userId)
	if (error) {
		console.log(error)
		alert('There was a problem updating your profile')
	}
	else alert('Profile updated')
}
