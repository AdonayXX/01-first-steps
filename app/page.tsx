import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
      <span className="text-5xl">Hola mundo</span>
      <Link href={'/about'}>About Page</Link>
    </main>
  );
}
