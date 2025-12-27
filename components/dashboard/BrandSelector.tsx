'use client'

import { useState } from 'react'
import brands from '@/data/brands.json'

export default function BrandSelector() {
  const [selectedBrand, setSelectedBrand] = useState(brands[0].id)

  return (
    <select
      value={selectedBrand}
      onChange={(e) => setSelectedBrand(e.target.value)}
      className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-sm"
    >
      {brands.map((brand) => (
        <option key={brand.id} value={brand.id}>
          {brand.name} ({brand.domain})
        </option>
      ))}
    </select>
  )
}
