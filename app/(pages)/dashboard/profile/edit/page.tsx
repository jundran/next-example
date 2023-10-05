import { Metadata } from "next/types"
import { redirect } from "next/navigation"
import getLoggedInUser from "@/utils/auth"
import ProfileForm from "./profileForm/profileForm"

export const metadata: Metadata = {
  title: 'NextExample | Dashboard | Edit Profile',
  description: 'Edit your profile'
}

export default async function EditProfilePage() {
	const user = await getLoggedInUser()
	if (!user) redirect('/login')

	return <ProfileForm user={user} />
}
