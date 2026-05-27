"use client"

import * as React from "react"

import { File, Trash2, Upload as UploadIcon, X } from "lucide-react"

import { cn } from "@benflux-ui/utils"

export interface UploadFile {
  uid: string
  name: string
  size?: number
  type?: string
  status?: "uploading" | "done" | "error"
  url?: string
  percent?: number
  originFile?: File
}

interface UploadProps {
  accept?: string
  multiple?: boolean
  maxCount?: number
  maxSize?: number // bytes
  listType?: "text" | "picture"
  fileList?: UploadFile[]
  onChange?: (files: UploadFile[]) => void
  onRemove?: (file: UploadFile) => void
  customRequest?: (file: File, onProgress: (p: number) => void) => Promise<string>
  disabled?: boolean
  children?: React.ReactNode
  className?: string
  dragArea?: boolean
}

function Upload({
  accept,
  multiple = false,
  maxCount,
  maxSize,
  listType = "text",
  fileList: externalList,
  onChange,
  onRemove,
  customRequest,
  disabled = false,
  children,
  className,
  dragArea = true,
}: UploadProps) {
  const [internalList, setInternalList] = React.useState<UploadFile[]>([])
  const [dragging, setDragging] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const files = externalList ?? internalList

  const uid = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`

  const processFiles = async (raw: FileList | null) => {
    if (!raw) return
    let added: UploadFile[] = []

    for (const f of Array.from(raw)) {
      if (maxSize && f.size > maxSize) continue
      const entry: UploadFile = {
        uid: uid(),
        name: f.name,
        size: f.size,
        type: f.type,
        status: "uploading",
        percent: 0,
        originFile: f,
      }
      added.push(entry)
    }

    if (maxCount) added = added.slice(0, maxCount - files.length)

    const next = [...files, ...added]
    setInternalList(next)
    onChange?.(next)

    for (const entry of added) {
      if (entry.originFile && customRequest) {
        try {
          const url = await customRequest(entry.originFile, (p) => {
            setInternalList((prev) =>
              prev.map((f) => (f.uid === entry.uid ? { ...f, percent: p } : f)),
            )
          })
          setInternalList((prev) =>
            prev.map((f) => (f.uid === entry.uid ? { ...f, status: "done", url } : f)),
          )
        } catch {
          setInternalList((prev) =>
            prev.map((f) => (f.uid === entry.uid ? { ...f, status: "error" } : f)),
          )
        }
      } else {
        setInternalList((prev) =>
          prev.map((f) => (f.uid === entry.uid ? { ...f, status: "done" } : f)),
        )
      }
    }
  }

  const remove = (file: UploadFile) => {
    onRemove?.(file)
    const next = files.filter((f) => f.uid !== file.uid)
    setInternalList(next)
    onChange?.(next)
  }

  const formatSize = (bytes?: number) => {
    if (!bytes) return ""
    if (bytes < 1024) return `${bytes}B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)}MB`
  }

  const trigger = (
    <input
      ref={inputRef}
      type="file"
      accept={accept}
      multiple={multiple}
      className="hidden"
      onChange={(e) => processFiles(e.target.files)}
    />
  )

  return (
    <div className={cn("space-y-3", className)}>
      {dragArea ? (
        <div
          onDragEnter={() => setDragging(true)}
          onDragLeave={() => setDragging(false)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault()
            setDragging(false)
            processFiles(e.dataTransfer.files)
          }}
          onClick={() => !disabled && inputRef.current?.click()}
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-border bg-muted/30 px-6 py-10 text-center transition-colors",
            dragging && "border-primary bg-primary/5",
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          {trigger}
          {children ?? (
            <>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <UploadIcon className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Click to upload or drag & drop
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {accept ?? "Any file type"}
                  {maxSize && ` — max ${formatSize(maxSize)}`}
                </p>
              </div>
            </>
          )}
        </div>
      ) : (
        <div onClick={() => !disabled && inputRef.current?.click()} className="cursor-pointer">
          {trigger}
          {children}
        </div>
      )}

      {files.length > 0 && (
        <ul className="space-y-2">
          {files.map((f) => (
            <li
              key={f.uid}
              className="flex items-center gap-3 rounded-md border border-border bg-background px-3 py-2 text-sm"
            >
              {listType === "picture" && f.url ? (
                <img src={f.url} alt={f.name} className="h-10 w-10 rounded object-cover" />
              ) : (
                <File className="h-4 w-4 shrink-0 text-muted-foreground" />
              )}
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{f.name}</p>
                {f.size && <p className="text-xs text-muted-foreground">{formatSize(f.size)}</p>}
                {f.status === "uploading" && (
                  <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${f.percent ?? 0}%` }}
                    />
                  </div>
                )}
              </div>
              <span
                className={cn(
                  "text-xs font-medium",
                  f.status === "done" && "text-green-500",
                  f.status === "error" && "text-destructive",
                  f.status === "uploading" && "text-primary",
                )}
              >
                {f.status === "done"
                  ? "Done"
                  : f.status === "error"
                    ? "Error"
                    : `${f.percent ?? 0}%`}
              </span>
              <button
                onClick={() => remove(f)}
                className="text-muted-foreground transition-colors hover:text-destructive"
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { Upload }
export type { UploadProps }
