import Card from '@/components/ui/Card'

export default function ModuleDetail({
  module,
}: {
  module: any
}) {
  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold mb-2">{module.name}</h2>
        <p className="text-zinc-400">
          Score: <span className="font-semibold">{module.score}</span>
        </p>
      </Card>

      <Card>
        <h3 className="font-semibold mb-3">Key Insights</h3>
        <ul className="list-disc list-inside text-zinc-400 space-y-1">
          {module.insights.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>

      <Card>
        <h3 className="font-semibold mb-3">Issues</h3>
        <ul className="list-disc list-inside text-zinc-400 space-y-1">
          {module.issues.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>

      <Card>
        <h3 className="font-semibold mb-3">Recommendations</h3>
        <ul className="list-disc list-inside text-zinc-400 space-y-1">
          {module.recommendations.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
