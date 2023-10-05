"use client"
import { useTransition } from 'react'
import { deleteArticle } from '@/serverActions'
import { DeleteArticleProps } from '@/types/app'

export default function DeleteButton(props: DeleteArticleProps) {
  let [isPending, startTransition] = useTransition()

  return (
    <button
      onClick={() => startTransition(() => deleteArticle({...props}))}
      disabled={isPending}
			type={props.type}
    >
      {isPending && <span>Deleting....</span>}
      {!isPending && <span>Delete</span>}
    </button>
  )
}
