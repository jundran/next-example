"use client"
import { FormEvent, useState } from 'react'

export default function Form () {
	const [messageSent, setMessageSent] = useState(false)

	function handleSubmit (e: FormEvent<HTMLFormElement>) {
		e.preventDefault()

		const server = process.env.NEXT_PUBLIC_MESSAGE_SERVER
		if (!server) throw new Error('Missing env var for message server post')
		fetch(server, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				sender: '[next example]: ' + e.currentTarget.fullname.value,
				email: e.currentTarget.email.value,
				message: e.currentTarget.message.value
			})
		}).catch(err => console.log(err))

		e.currentTarget.reset()
		setMessageSent(true)
		setTimeout(() => setMessageSent(false), 5000)
	}

	return (
		<form onSubmit={handleSubmit}>
			<ul className='ul-unstyled'>
				<li className='form-field'>
					<label className='label' htmlFor="name">Name</label>
					<input
						className='input' id="fullname" name="fullname"
						placeholder="Your name" autoComplete='name' required
					/>
				</li>
				<li className='form-field'>
					<label className='label' htmlFor="email">Email</label>
					<input
						className='input' id="email" name="email" type="email"
						placeholder="Your email" autoComplete='email' required
					/>
				</li>
				<li className='form-field'>
					<label className='label' htmlFor="message">Message</label>
					<textarea
						className='input'
						id="message"
						name="message"
						placeholder="Enter your message"
						required
						cols={30}
						rows={10}
					/>
				</li>
			</ul>
			{messageSent && <p>Message Sent</p>}
			<button>Send</button>
		</form>
	)
}