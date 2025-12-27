import BrandSelector from '@/components/dashboard/BrandSelector'
import SnapshotCards from '@/components/dashboard/SnapshotCards'

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-zinc-400 mt-1">
            High-level snapshot of brand AI visibility
          </p>
        </div>

        <BrandSelector />
      </div>

      <SnapshotCards />
    </div>
  )
}
