"use server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createSupabaseServerClient } from "./utils/supabase-server"
import { DeleteArticleProps } from "@/types/app"

export async function deleteArticle(props: DeleteArticleProps) {
	const { id, redirectTo} = props
  const supabase = createSupabaseServerClient()
  const { error } = await supabase.from('articles')
    .delete()
    .eq('id', id)

  if (error) {
		console.error(error)
    throw new Error('Could not delete the article.')
  }

  revalidatePath(redirectTo)
  redirect(redirectTo)
}
