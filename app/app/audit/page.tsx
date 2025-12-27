'use client'

import { useState } from 'react'
import modules from '@/data/audit-modules.json'
import ModuleSidebar from '@/components/audit/ModuleSidebar'
import ModuleDetail from '@/components/audit/ModuleDetail'

export default function AuditPage() {
  const [selectedId, setSelectedId] = useState(modules[0].id)
  const selectedModule = modules.find(m => m.id === selectedId)!

  return (
    <div className="grid grid-cols-[250px_1fr] gap-8">
      <ModuleSidebar
        selected={selectedId}
        onSelect={setSelectedId}
      />

      <ModuleDetail module={selectedModule} />
    </div>
  )
}
