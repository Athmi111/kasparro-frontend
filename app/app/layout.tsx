import Link from 'next/link'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <header className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            KASPARRO
          </Link>

          <nav className="flex gap-6 text-sm text-zinc-400">
            <Link href="/app/dashboard" className="hover:text-white">
              Dashboard
            </Link>
            <Link href="/app/audit" className="hover:text-white">
              Audit
            </Link>
            <Link href="/app/architecture" className="hover:text-white">
              Architecture
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  )
}
