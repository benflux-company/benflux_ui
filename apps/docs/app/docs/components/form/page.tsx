import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Form" }

export default function FormPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Forms
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Form</h1>
        <p className="text-lg text-muted-foreground">
          Form components built on top of React Hook Form and Zod for validation. Provides
          accessible form labels, error messages, and descriptions.
        </p>
      </div>

      <div className="flex items-center justify-center rounded-xl border border-border bg-muted/20 p-10">
        <div className="w-full max-w-sm space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Username</label>
            <input
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground"
              placeholder="johndoe"
              readOnly
            />
            <p className="text-xs text-muted-foreground">This is your public display name.</p>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Email</label>
            <input
              className="flex h-9 w-full rounded-md border border-destructive/50 bg-background px-3 text-sm"
              placeholder="john@example.com"
              readOnly
            />
            <p className="text-xs text-destructive">Please enter a valid email address.</p>
          </div>
          <button className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground">
            Submit
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add form" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form, FormControl, FormDescription,
  FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const schema = z.object({
  username: z.string().min(2).max(50),
})

export default function ProfileForm() {
  const form = useForm({ resolver: zodResolver(schema) })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>Your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`}
        />
      </div>
    </div>
  )
}
