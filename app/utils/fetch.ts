import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export async function getUserProfileData(userId: string) {
	try {
		const supabase = createClientComponentClient()
		const { data, error } = await supabase
			.from('profiles')
			.select()
			.eq('id', userId)
			.single()

		if (error) throw error
		return data
	} catch (error) {
		console.log(error)
	}
}

export function getAvatarPublicUrl(url: string) {
	if (url.startsWith('http')) return url // avatars.githubusercontent.com

	const supabase = createClientComponentClient()
	const { data: { publicUrl } } = supabase.storage
		.from('avatars')
		.getPublicUrl(url)

	return publicUrl
}
