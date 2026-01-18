export default async function DynamicMealsRoute({params}) {
  const { slug } = await params;

  return (
    <main>
      <h1>Dynamic route - {slug}</h1>
    </main>
  )
}