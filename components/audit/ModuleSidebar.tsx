'use client'

import modules from '@/data/audit-modules.json'

export default function ModuleSidebar({
  selected,
  onSelect,
}: {
  selected: string
  onSelect: (id: string) => void
}) {
  return (
    <aside className="border-r border-zinc-800 pr-4 space-y-2">
      {modules.map((module) => (
        <button
          key={module.id}
          onClick={() => onSelect(module.id)}
          className={`w-full text-left p-3 rounded-lg ${
            selected === module.id
              ? 'bg-zinc-800 text-white'
              : 'text-zinc-400 hover:bg-zinc-900'
          }`}
        >
          <div className="font-medium">{module.name}</div>
          <div className="text-xs text-zinc-500">
            Score: {module.score}
          </div>
        </button>
      ))}
    </aside>
  )
}
