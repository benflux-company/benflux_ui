"use client"

import { CodeBlock } from "@/components/docs/code-block"

import { Upload } from "@benflux-ui/react"

export default function UploadPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Inputs
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Upload</h1>
        <p className="text-lg text-muted-foreground">
          Drag-and-drop file upload with file list management, progress indicators, and size/type
          validation.
        </p>
      </div>

      <div className="space-y-6 rounded-xl border border-border bg-card p-8">
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">Default (drag &amp; drop)</p>
          <Upload accept="image/*,.pdf" maxSize={5} multiple />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">Picture list</p>
          <Upload accept="image/*" listType="picture" maxCount={3} />
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add upload" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Upload } from "@benflux-ui/react"

// Basic drag & drop
<Upload
  accept="image/*,.pdf"
  maxSize={10}  // MB
  multiple
  onChange={(files) => console.log(files)}
/>

// Picture list with count limit
<Upload
  accept="image/*"
  listType="picture"
  maxCount={5}
  onRemove={(file) => console.log("removed", file)}
/>

// Custom upload handler
<Upload
  customRequest={async ({ file, onProgress, onSuccess, onError }) => {
    const res = await uploadToServer(file, onProgress)
    if (res.ok) onSuccess(res) else onError(new Error("failed"))
  }}
/>`}
        />
      </div>
    </div>
  )
}
