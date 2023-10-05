"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Image from "next/image"

type Props = {
	userId: string
	url: string
	onUpload: (url: string) => void
}
export default function Avatar({ userId, url, onUpload }: Props) {
	return (
		<div>
			<h2>Avatar</h2>
			<Image
				src={url}
				width={200}
				height={200}
				alt='avatar'
			/>
			<label className="label" htmlFor="avatar">Upload new avatar</label>
			<input
				className="ft input"
				id="avatar"
				type="file"
				accept="image/*"
				onChange={e => uploadAvatar(e, userId, onUpload)}
			/>
		</div>
	)
}

async function uploadAvatar (
		e: React.ChangeEvent<HTMLInputElement>,
		userId: Props['userId'],
		onUpload: Props['onUpload']
	) {
	try {
		if (!e.target.files || e.target.files.length === 0) {
			throw new Error('You must select an image to upload.')
		}

		const file = e.target.files[0]
		const [fileName, fileExt] = file.name.split('.')
		const bucketStoragePath = `${userId}-${Date.now()}-${fileName}.${fileExt}`

		const supabase = createClientComponentClient()
		const { error } = await supabase.storage.from('avatars').upload(bucketStoragePath, file)
		if (error) {
			if (error.name = 'Payload too large') {
				throw new Error('Article image must be less than 1 MB')
			}
			throw error
		}
		else {
			onUpload(bucketStoragePath)
		}
	} catch (error) {
		alert((error as Error).message)
	}
}
