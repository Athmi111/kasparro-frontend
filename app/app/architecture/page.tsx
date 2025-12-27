import Card from '@/components/ui/Card'

export default function ArchitecturePage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">System Architecture</h1>
        <p className="text-zinc-400">
          Frontend representation of Kasparro’s AI-native audit pipeline
        </p>
      </div>

      {/* Architecture Blocks */}
      <div className="space-y-6">
        {/* InputAssembler */}
        <Card>
          <h2 className="text-xl font-semibold mb-2">1. InputAssembler</h2>
          <p className="text-zinc-400 mb-4">
            Collects and normalizes raw brand data from multiple sources.
          </p>
          <ul className="list-disc list-inside text-zinc-400 space-y-1">
            <li>Website content and metadata</li>
            <li>Structured data (schema.org)</li>
            <li>Brand entity references</li>
            <li>Internal and external links</li>
          </ul>
        </Card>

        {/* ContextPack */}
        <Card>
          <h2 className="text-xl font-semibold mb-2">2. ContextPack</h2>
          <p className="text-zinc-400 mb-4">
            Enriches inputs into a unified context layer used by audit modules.
          </p>
          <ul className="list-disc list-inside text-zinc-400 space-y-1">
            <li>Entity graph construction</li>
            <li>Authority and trust signals</li>
            <li>Topic and intent clustering</li>
            <li>Competitive context mapping</li>
          </ul>
        </Card>

        {/* Audit Modules */}
        <Card>
          <h2 className="text-xl font-semibold mb-2">3. Audit Modules</h2>
          <p className="text-zinc-400 mb-4">
            Specialized analysis layers that evaluate AI-SEO performance.
          </p>
          <ul className="list-disc list-inside text-zinc-400 space-y-1">
            <li>Entity Coverage</li>
            <li>AI Visibility</li>
            <li>Trust & EEAT</li>
            <li>Citation Presence</li>
            <li>Query Intent Mapping</li>
            <li>Competitive AI Share</li>
            <li>Content Gaps</li>
          </ul>
        </Card>

        {/* Output Surfaces */}
        <Card>
          <h2 className="text-xl font-semibold mb-2">4. Output Surfaces</h2>
          <p className="text-zinc-400 mb-4">
            Structured outputs delivered to users through the dashboard UI.
          </p>
          <ul className="list-disc list-inside text-zinc-400 space-y-1">
            <li>Quantified scores per module</li>
            <li>Key insights and findings</li>
            <li>Issue flags and risks</li>
            <li>Actionable recommendations</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
