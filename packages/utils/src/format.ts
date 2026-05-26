/** Format a number with locale-aware separators */
export function formatNumber(value: number, locale = "en-US", options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat(locale, options).format(value)
}

/** Format bytes to human-readable string */
export function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`
}

/** Truncate string with ellipsis */
export function truncate(str: string, maxLength: number) {
  if (str.length <= maxLength) return str
  return `${str.slice(0, maxLength)}...`
}

/** Convert string to kebab-case */
export function toKebabCase(str: string) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase()
}

/** Convert string to camelCase */
export function toCamelCase(str: string) {
  return str.replace(/-([a-z])/g, (g) => g[1]!.toUpperCase())
}

/** Generate a random ID */
export function generateId(prefix = "nebula") {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`
}

/** Format relative time */
export function formatRelativeTime(date: Date, locale = "en-US") {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffSecs = Math.floor(diffMs / 1000)
  const diffMins = Math.floor(diffSecs / 60)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" })

  if (diffSecs < 60) return rtf.format(-diffSecs, "second")
  if (diffMins < 60) return rtf.format(-diffMins, "minute")
  if (diffHours < 24) return rtf.format(-diffHours, "hour")
  return rtf.format(-diffDays, "day")
}

/** Slugify a string for URLs */
export function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}
