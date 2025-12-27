import Link from 'next/link'

const modules = [
  {
    title: 'Entity Coverage',
    description:
      'Measures how comprehensively your brand entities are represented in AI training data',
  },
  {
    title: 'AI Visibility',
    description:
      'Tracks how often your brand appears in AI-generated responses across platforms',
  },
  {
    title: 'Trust & EEAT',
    description:
      "Evaluates your brand's Expertise, Experience, Authoritativeness, and Trustworthiness signals",
  },
  {
    title: 'Citation Presence',
    description:
      'Analyzes how frequently your brand is cited as a source in AI responses',
  },
  {
    title: 'Query Intent Mapping',
    description:
      "Maps user search intents to your brand's content coverage",
  },
  {
    title: 'Competitive AI Share',
    description:
      'Benchmarks your AI presence against competitors',
  },
  {
    title: 'Content Gaps',
    description:
      'Identifies topics where competitors have stronger AI presence',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

            {/* ================= MAIN PAGE HEADER ================= */}
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


      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-wider text-zinc-500 mb-4">
          AI-Native SEO Intelligence
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          SEO built for how<br />AI actually answers
        </h1>

        <p className="text-lg text-zinc-400 max-w-3xl mx-auto mb-10">
          Kasparro helps brands understand how they are interpreted, cited,
          and trusted inside AI-generated answers — not just ranked in blue links.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/app/dashboard"
            className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200"
          >
            Run AI-SEO Audit
          </Link>

          <Link
            href="/platform"
            className="px-6 py-3 rounded-lg border border-zinc-700 hover:bg-zinc-900"
          >
            View Platform
          </Link>
        </div>
      </section>

      {/* ========== WHY AI-SEO IS DIFFERENT ========== */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why AI-SEO is fundamentally different
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-3">
                Traditional SEO
              </h3>
              <p className="text-zinc-400">
                Optimizes for rankings, keywords, and traffic signals designed
                for classical search engines and blue-link results.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-3">
                AI-First Search
              </h3>
              <p className="text-zinc-400">
                Optimizes how brands are interpreted, cited, and trusted
                inside AI-generated answers across modern search experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CORE AI-SEO MODULES ========== */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Core AI-SEO Audit Modules
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <div
                key={module.title}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {module.title}
                </h3>
                <p className="text-sm text-zinc-400">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* ================= HOW KASPARRO WORKS ================= */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
            How Kasparro works
          </h2>

          <div className="space-y-14">
            {/* Step 1 */}
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-lg font-semibold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Brand Inputs
                </h3>
                <p className="text-zinc-400">
                  Connect your domain, content, and brand assets
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-lg font-semibold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Context Assembly
                </h3>
                <p className="text-zinc-400">
                  Build comprehensive context packs from multiple data sources
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-lg font-semibold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  AI Audit Modules
                </h3>
                <p className="text-zinc-400">
                  Run 7 specialized modules analyzing different AI-SEO dimensions
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-lg font-semibold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Structured Outputs
                </h3>
                <p className="text-zinc-400">
                  Receive actionable insights, scores, and recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-zinc-800 py-12 mt-24">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">KASPARRO</p>
          <p className="text-sm text-zinc-400">
            © 2025 Kasparro. AI-Native SEO Intelligence Platform.
          </p>
        </div>
      </footer>

    </main>
  )
}
