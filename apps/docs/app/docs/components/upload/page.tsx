"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

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

      <ComponentPreview
        className="flex-col items-start gap-6"
        code={`import { Upload } from "@benflux-ui/react"

// Drag & drop (default)
<Upload accept="image/*,.pdf" maxSize={5} multiple />

// Picture list with max count
<Upload accept="image/*" listType="picture" maxCount={3} />`}
      >
        <div className="w-full space-y-6">
          <div className="space-y-1.5">
            <p className="text-xs font-medium text-muted-foreground">Default (drag &amp; drop)</p>
            <Upload accept="image/*,.pdf" maxSize={5} multiple />
          </div>
          <div className="space-y-1.5">
            <p className="text-xs font-medium text-muted-foreground">Picture list</p>
            <Upload accept="image/*" listType="picture" maxCount={3} />
          </div>
        </div>
      </ComponentPreview>

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
    if (res.ok) onSuccess(res)
    else onError(new Error("Upload failed"))
  }}
/>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "accept",
              type: "string",
              default: "—",
              description: "Accepted file types (e.g. image/*,.pdf)",
            },
            {
              name: "multiple",
              type: "boolean",
              default: "false",
              description: "Allow selecting multiple files",
            },
            {
              name: "maxSize",
              type: "number",
              default: "—",
              description: "Maximum file size in MB",
            },
            {
              name: "maxCount",
              type: "number",
              default: "—",
              description: "Maximum number of files",
            },
            {
              name: "listType",
              type: '"text" | "picture"',
              default: '"text"',
              description: "File list display style",
            },
            {
              name: "onChange",
              type: "(files: File[]) => void",
              default: "—",
              description: "Called when the file list changes",
            },
            {
              name: "onRemove",
              type: "(file: File) => void",
              default: "—",
              description: "Called when a file is removed",
            },
            {
              name: "customRequest",
              type: "(options: UploadRequestOption) => void",
              default: "—",
              description: "Custom upload handler to replace the default behavior",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the upload area",
            },
          ]}
        />
      </div>
    </div>
  )
}
