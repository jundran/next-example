import { Metadata } from "next/types"
import Image from "next/image"
import { redirect } from "next/navigation"
import Link from "next/link"
import getLoggedInUser from "@/utils/auth"
import { getAvatarPublicUrl, getUserProfileData } from "@/utils/fetch"

export const metadata: Metadata = {
  title: 'NextExample | Dashboard | Profile',
  description: 'Manage your profile'
}

async function getData(userId: string) {
	const profile = await getUserProfileData(userId)
	const avatarUrl = getAvatarPublicUrl(profile.avatar_url)
	return { profile, avatarUrl }
}

export default async function Profile() {
	const user = await getLoggedInUser()
	if (!user) redirect('/login')

	const { profile, avatarUrl } = await getData(user.id)

	return (
		<div>
			<Link className='link-button' href='/dashboard/profile/edit'>Edit Profile</Link>
			<h2>{profile.full_name}</h2>
			<p>{user.email}</p>
			<Image
				src={avatarUrl}
				width={200}
				height={200}
				alt='avatar'
			/>
		</div>
	)
}
