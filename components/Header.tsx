import Link from "next/link";

export default function Header() {
  return (
    <header className="text-center bg-slate-800 p-8 my-6 rounded-md">
      <h1 className="text-3xl font-bold text-white">
        <Link href="/">Noer&apos;s Blog</Link>
      </h1>
      <p className="text-slate-300">✌️ Welcome to my blog 💻</p>
    </header>
  );
}
