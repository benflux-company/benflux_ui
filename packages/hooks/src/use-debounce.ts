"use client"

import { useCallback, useEffect, useRef, useState } from "react"

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

export function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number,
) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  return useCallback(
    (...args: Parameters<T>) => {
      const timer = setTimeout(() => callbackRef.current(...args), delay)
      return () => clearTimeout(timer)
    },
    [delay],
  )
}
