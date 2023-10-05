"use client"
import { FormProps } from "@/types/app"

export default function SignUpForm({ error, handleSubmit }: FormProps) {
	return (
			<form onSubmit={handleSubmit}>
				<ul className='ul-unstyled'>
					<li className='form-field'>
						<label className='label' htmlFor="name">Name</label>
						<input
							className='input' id="fullname" name="fullname"
							placeholder="Your name" autoComplete='name'
						/>
					</li>
					<li className='form-field'>
						<label className='label' htmlFor="email">Email</label>
						<input
							className='input' id="email" name="email" type="email"
							placeholder="Your email" autoComplete='email'
						/>
					</li>
					<li className='form-field'>
						<label className='label' htmlFor="password">Password</label>
						<input
							className='input'
							id="password"
							name="password"
							placeholder="Create a password"
							type="password"
							autoComplete="new-password"
						/>
					</li>
				</ul>
				{error && <p>{error}</p>}
				<button>Send</button>
			</form>
  )
}
