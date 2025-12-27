import Link from 'next/link'

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= HEADER (REDIRECTS TO HOME) ================= */}
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-wide hover:opacity-90"
          >
            KASPARRO
          </Link>
        </div>
      </header>

      {/* ================= PLATFORM HERO ================= */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          The Kasparro Platform
        </h1>
        <p className="text-lg text-zinc-400">
          A comprehensive system for understanding and optimizing your brand&apos;s
          presence in AI-powered search.
        </p>
      </section>

      {/* ================= AUDIT PIPELINE FLOW ================= */}
      <section className="pb-32">
        <h2 className="text-3xl font-bold text-center mb-20">
          Audit Pipeline Flow
        </h2>

        <div className="flex justify-center">
          <div className="relative flex flex-col items-center space-y-24">

            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 w-px bg-zinc-800" />

            {[
              { title: 'Input', desc: 'Domain, content, brand data' },
              { title: 'Assembly', desc: 'Context pack generation' },
              { title: 'Analysis', desc: '7 audit modules' },
              { title: 'Output', desc: 'Scores & recommendations' },
            ].map((step) => (
              <div
                key={step.title}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-zinc-600" />
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="text-sm text-zinc-400 mt-1">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT DATA KASPARRO CONSUMES ================= */}
      <section className="max-w-6xl mx-auto mt-32 px-6">
        <h2 className="text-3xl font-bold mb-10">
          What Data Kasparro Consumes
        </h2>

        <div className="space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Web Presence</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>› Website content</li>
              <li>› Meta data</li>
              <li>› Structured data</li>
              <li>› Internal linking</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Authority Signals</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>› Backlink profile</li>
              <li>› Domain authority</li>
              <li>› Citation networks</li>
              <li>› Expert mentions</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Content Intelligence</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>› Topic coverage</li>
              <li>› Content freshness</li>
              <li>› Semantic relationships</li>
              <li>› Entity mapping</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= WHAT BRANDS RECEIVE ================= */}
      <section className="max-w-6xl mx-auto mt-32 px-6">
        <h2 className="text-3xl font-bold mb-10">
          What Brands Receive
        </h2>

        <div className="space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Comprehensive Scores
            </h3>
            <p className="text-zinc-400">
              Quantified metrics across all 7 audit dimensions with historical tracking
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Actionable Insights
            </h3>
            <p className="text-zinc-400">
              Specific findings about your AI-SEO strengths and weaknesses
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Prioritized Issues
            </h3>
            <p className="text-zinc-400">
              Critical problems ranked by severity and impact on AI visibility
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Strategic Recommendations
            </h3>
            <p className="text-zinc-400">
              Concrete steps to improve your presence in AI-generated answers
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW KASPARRO DIFFERS ================= */}
      <section className="max-w-6xl mx-auto mt-32 mb-32 px-6">
        <h2 className="text-3xl font-bold mb-10">
          How Kasparro Differs
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-zinc-400">
              Traditional SEO Tools
            </h3>
            <ul className="space-y-2 text-zinc-500">
              <li>✕ Focus on keyword rankings</li>
              <li>✕ Optimize for search engine bots</li>
              <li>✕ Track backlinks and domain authority</li>
              <li>✕ Measure traffic and click-through rates</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">
              Kasparro AI-SEO
            </h3>
            <ul className="space-y-2 text-zinc-400">
              <li>✓ Measure AI-generated answer inclusion</li>
              <li>✓ Optimize for LLM interpretation</li>
              <li>✓ Track citation presence in AI responses</li>
              <li>✓ Analyze trust signals for AI systems</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  )
}
