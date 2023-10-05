import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')

	if (code) {
		const supabase = createRouteHandlerClient({ cookies })
		await supabase.auth.exchangeCodeForSession(code)
	}

	return Response.redirect(`${url.origin}/dashboard`)
}
