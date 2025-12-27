import metrics from '@/data/dashboard-metrics.json'
import Card from '@/components/ui/Card'

export default function SnapshotCards() {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <Card>
        <p className="text-sm text-zinc-400">AI Visibility Score</p>
        <p className="text-3xl font-bold mt-2">
          {metrics.aiVisibilityScore}
        </p>
      </Card>

      <Card>
        <p className="text-sm text-zinc-400">Trust / EEAT Score</p>
        <p className="text-3xl font-bold mt-2">
          {metrics.trustScore}
        </p>
      </Card>

      <Card>
        <p className="text-sm text-zinc-400">
          Non-Branded Keyword Coverage
        </p>
        <p className="text-3xl font-bold mt-2">
          {metrics.keywordCoverage}%
        </p>
      </Card>

      <Card>
        <p className="text-sm text-zinc-400">Last Audit</p>
        <p className="text-lg font-semibold mt-3">
          {metrics.lastAudit}
        </p>
      </Card>
    </div>
  )
}
