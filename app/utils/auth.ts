import { createSupabaseServerClient } from "@/utils/supabase-server"

export default async function getLoggedInUser() {
	const supabase = createSupabaseServerClient()
	const { data } = await supabase.auth.getSession()
	const user = data.session?.user
	return user ? user : null
}
