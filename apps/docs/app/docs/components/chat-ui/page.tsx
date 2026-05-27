"use client"

import * as React from "react"

import { CodeBlock, InlineCode } from "@/components/docs/code-block"

import { ChatUI } from "@benflux-ui/react"
import type { ChatMessage } from "@benflux-ui/react"

const DEMO_MESSAGES: ChatMessage[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hi! I'm your AI assistant. How can I help you today?",
    timestamp: new Date(),
    status: "sent",
  },
  {
    id: "2",
    role: "user",
    content: "Can you explain what Benflux UI is?",
    timestamp: new Date(),
    status: "sent",
  },
  {
    id: "3",
    role: "assistant",
    content:
      "Benflux UI is a modern React component library built with Tailwind CSS and Framer Motion. It provides 80+ accessible, animated components for building beautiful interfaces — from simple buttons to complex data tables and AI chat interfaces like this one!",
    timestamp: new Date(),
    status: "sent",
  },
]

function LiveDemo() {
  const [messages, setMessages] = React.useState<ChatMessage[]>(DEMO_MESSAGES)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSend = (text: string) => {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date(),
      status: "sent",
    }
    setMessages((prev) => [...prev, userMsg])
    setIsLoading(true)

    // Simulate streaming response
    const streamingId = (Date.now() + 1).toString()
    const response =
      "Thanks for your message! This is a demo — connect your own AI backend via the onSend prop to stream real responses."
    let i = 0

    setMessages((prev) => [
      ...prev,
      {
        id: streamingId,
        role: "assistant",
        content: "",
        timestamp: new Date(),
        status: "streaming",
      },
    ])

    const interval = setInterval(() => {
      i += 3
      setMessages((prev) =>
        prev.map((m) => (m.id === streamingId ? { ...m, content: response.slice(0, i) } : m)),
      )
      if (i >= response.length) {
        clearInterval(interval)
        setMessages((prev) =>
          prev.map((m) => (m.id === streamingId ? { ...m, content: response, status: "sent" } : m)),
        )
        setIsLoading(false)
      }
    }, 30)
  }

  return (
    <div className="h-[500px] overflow-hidden rounded-xl border border-border">
      <ChatUI
        messages={messages}
        onSend={handleSend}
        isLoading={isLoading}
        agentName="Benflux Assistant"
        placeholder="Ask something..."
      />
    </div>
  )
}

export default function ChatUIPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Chat UI</h1>
        <p className="text-lg text-muted-foreground">
          A full-featured chat interface with animated message bubbles, streaming support,
          copy-to-clipboard, and a built-in textarea input. Plug in any AI backend via the{" "}
          <InlineCode>onSend</InlineCode> prop.
        </p>
      </div>

      {/* Live demo */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Demo</h2>
        <LiveDemo />
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add chat-ui" language="bash" />
      </div>

      {/* Import */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { ChatUI } from "@benflux-ui/react"
import type { ChatMessage } from "@benflux-ui/react"`}
        />
      </div>

      {/* Basic usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic usage</h2>
        <CodeBlock
          language="tsx"
          code={`"use client"

import * as React from "react"
import { ChatUI } from "@benflux-ui/react"
import type { ChatMessage } from "@benflux-ui/react"

export function MyChatBot() {
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! How can I help you today?",
      timestamp: new Date(),
      status: "sent",
    },
  ])
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSend = async (text: string) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "user", content: text, timestamp: new Date(), status: "sent" },
    ])
    setIsLoading(true)

    // Call your AI backend
    const reply = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: text }),
    }).then((r) => r.text())

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "assistant", content: reply, timestamp: new Date(), status: "sent" },
    ])
    setIsLoading(false)
  }

  return (
    <div className="h-[600px]">
      <ChatUI
        messages={messages}
        onSend={handleSend}
        isLoading={isLoading}
        agentName="My Assistant"
        placeholder="Ask anything..."
      />
    </div>
  )
}`}
        />
      </div>

      {/* Streaming */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Streaming responses</h2>
        <p className="text-sm text-muted-foreground">
          Set <InlineCode>status: "streaming"</InlineCode> on a message to show the animated cursor
          and reveal text progressively. Update the message content in place as tokens arrive.
        </p>
        <CodeBlock
          language="tsx"
          code={`const handleSend = async (text: string) => {
  const streamId = Date.now().toString()

  // Add user message
  setMessages((prev) => [
    ...prev,
    { id: Date.now().toString(), role: "user", content: text, status: "sent" },
  ])

  // Add empty streaming message
  setMessages((prev) => [
    ...prev,
    { id: streamId, role: "assistant", content: "", status: "streaming" },
  ])

  setIsLoading(true)

  // Stream from your API
  const res = await fetch("/api/chat/stream", { method: "POST", body: text })
  const reader = res.body!.getReader()
  const decoder = new TextDecoder()
  let full = ""

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    full += decoder.decode(value)
    setMessages((prev) =>
      prev.map((m) => (m.id === streamId ? { ...m, content: full } : m))
    )
  }

  // Mark as done
  setMessages((prev) =>
    prev.map((m) => (m.id === streamId ? { ...m, status: "sent" } : m))
  )
  setIsLoading(false)
}`}
        />
      </div>

      {/* Props */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Props</h2>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground">
                  Prop
                </th>
                <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground">
                  Type
                </th>
                <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground">
                  Default
                </th>
                <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  prop: "messages",
                  type: "ChatMessage[]",
                  def: "—",
                  desc: "Array of messages to display",
                },
                {
                  prop: "onSend",
                  type: "(msg: string) => void",
                  def: "—",
                  desc: "Called when the user submits a message",
                },
                {
                  prop: "isLoading",
                  type: "boolean",
                  def: "false",
                  desc: "Shows the animated loading bubble",
                },
                {
                  prop: "placeholder",
                  type: "string",
                  def: '"Ask anything..."',
                  desc: "Textarea placeholder text",
                },
                {
                  prop: "agentName",
                  type: "string",
                  def: '"AI Assistant"',
                  desc: "Name shown in the chat header",
                },
                {
                  prop: "systemAvatar",
                  type: "string",
                  def: "—",
                  desc: "URL for the assistant avatar image",
                },
                {
                  prop: "userAvatar",
                  type: "string",
                  def: "—",
                  desc: "URL for the user avatar image",
                },
              ].map((row) => (
                <tr key={row.prop} className="border-b border-border last:border-0">
                  <td className="px-4 py-2.5 font-mono text-xs text-blue-400">{row.prop}</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                    {row.type}
                  </td>
                  <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{row.def}</td>
                  <td className="px-4 py-2.5 text-xs text-muted-foreground">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ChatMessage type */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">ChatMessage type</h2>
        <CodeBlock
          language="tsx"
          code={`interface ChatMessage {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  timestamp?: Date
  status?: "sending" | "sent" | "error" | "streaming"
}`}
        />
      </div>
    </div>
  )
}
