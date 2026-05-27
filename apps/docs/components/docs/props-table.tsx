interface Prop {
  name: string
  type: string
  default?: string
  description: string
  required?: boolean
}

interface PropsTableProps {
  props: Prop[]
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Prop</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Type</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Default</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, i) => (
            <tr key={prop.name} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
              <td className="px-4 py-3 font-mono text-xs">
                <span className="text-foreground">{prop.name}</span>
                {prop.required && <span className="ml-1 text-destructive">*</span>}
              </td>
              <td className="px-4 py-3 font-mono text-xs text-blue-400">{prop.type}</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                {prop.default ?? "—"}
              </td>
              <td className="px-4 py-3 text-xs text-muted-foreground">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
