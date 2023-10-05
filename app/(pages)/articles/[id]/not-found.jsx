import Link from "next/link"

export default function NotFound() {
  return (
    <main>
      <h2>Not Found - 404</h2>
      <p>We could not find the article you were looking for.</p>
      <p>Go back to <Link href="/articles">articles list</Link>.</p>
    </main>
  )
}