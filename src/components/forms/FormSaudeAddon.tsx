'use client'
import { Field } from './formsConfig'

/* Grid 5×2 para distribuição etária */
export function DistribuicaoGrid({
  fields,
  values,
  handleChange,
}: {
  fields: Field[]
  values: Record<string, any>
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <fieldset className="mb-6 p-4 border border-gray-600 rounded-lg">
      <legend className="px-2 text-accent font-semibold">
        Distribuição de vidas
      </legend>

      <div className="grid grid-cols-5 gap-4 mt-4">
        {fields.map(f => (
          <div key={f.name} className="flex flex-col text-xs">
            <label className="mb-1 text-gray-300">{f.label}</label>
            <input
              type="number"
              name={f.name}
              value={values[f.name]}
              onChange={handleChange}
              min={0}
              className="bg-transparent border border-gray-600 rounded text-white text-center py-1"
            />
          </div>
        ))}
      </div>
    </fieldset>
  )
}
