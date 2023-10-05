import Link from "next/link"

export default function NotFound() {
  return (
    <main>
      <h2>Road block ahead!</h2>
      <p>We could not find the article you were looking for.</p>
      <p>Go back to all <Link href="/articles">articles</Link>.</p>
    </main>
  )
}