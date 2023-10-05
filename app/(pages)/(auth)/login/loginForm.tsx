"use client"
import { FormProps } from "@/types/app"

export default function LoginForm({ error, handleSubmit }: FormProps) {
	return (
		<form onSubmit={handleSubmit}>
			<ul className='ul-unstyled'>
				<li className='form-field'>
					<label className='label' htmlFor="email">Email</label>
					<input
						className='input' id="email" name="email" type="email"
						placeholder="Your email" autoComplete='email'
					/>
				</li>
				<li className='form-field'>
					<label className='label' htmlFor="message">Password</label>
					<input
						className='input'
						id="password"
						name="password"
						placeholder="Enter your password"
						type="password"
						autoComplete="current-password"
					/>
				</li>
			</ul>
			{error && <p>{error}</p>}
			<button>Send</button>
		</form>
  )
}
