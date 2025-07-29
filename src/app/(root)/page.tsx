export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <section className="b-rose-500 min-h-screen">home</section>;
}
