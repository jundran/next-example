import { ReactNode } from 'react'
import { createSupabaseServerClient } from "@/utils/supabase-server"
import { redirect } from 'next/navigation'

export default async function AuthLayout({ children }: { children: ReactNode }) {
  const supabase = createSupabaseServerClient()
  const { data } = await supabase.auth.getSession()

	// If logged user tries to go to route under (auth) then redirect them to the dashboard

  if (data.session) {
    redirect('/dashboard')
  }

  return <>{children}</>
}
