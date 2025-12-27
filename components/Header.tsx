import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-zinc-800">
      <div className="px-6 py-4">
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wide hover:opacity-90"
        >
          KASPARRO
        </Link>
      </div>
    </header>
  )
}
