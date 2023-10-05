import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export function createSupabaseServerClient() {
	const cookieStore = cookies()
  return createServerComponentClient<Database>({ cookies: () => cookieStore })
}
