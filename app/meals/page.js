import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <Link href="/meals/share">Share Page</Link>
      <br />
      <Link href="/meals/dynamic">Dynamic Page</Link>
    </main>
  )
}