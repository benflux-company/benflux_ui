"use client"

import * as React from "react"

import { AnimatePresence, motion } from "framer-motion"
import { Bot, Check, Copy, Loader2, RotateCcw, Send, User } from "lucide-react"

import { cn } from "@benflux-ui/utils"

import { Button } from "../inputs/button"
import { Textarea } from "../inputs/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "../layout/avatar"

export interface ChatMessage {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  timestamp?: Date
  status?: "sending" | "sent" | "error" | "streaming"
}

export interface ChatUIProps extends React.HTMLAttributes<HTMLDivElement> {
  messages: ChatMessage[]
  onSend: (message: string) => void
  isLoading?: boolean
  placeholder?: string
  systemAvatar?: string
  userAvatar?: string
  agentName?: string
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isUser = message.role === "user"

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("group flex gap-3", isUser && "flex-row-reverse")}
    >
      <Avatar size="sm" className="mt-1 shrink-0">
        {isUser ? (
          <AvatarFallback className="bg-primary text-primary-foreground">
            <User className="h-3 w-3" />
          </AvatarFallback>
        ) : (
          <AvatarFallback className="bg-muted">
            <Bot className="h-3 w-3" />
          </AvatarFallback>
        )}
      </Avatar>

      <div className={cn("flex max-w-[80%] flex-col gap-1", isUser && "items-end")}>
        <div
          className={cn(
            "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
            isUser
              ? "bg-primary text-primary-foreground rounded-tr-sm"
              : "bg-muted text-foreground rounded-tl-sm",
            message.status === "error" && "border-destructive/30 bg-destructive/10 border",
          )}
        >
          {message.status === "streaming" ? (
            <TypingIndicator content={message.content} />
          ) : (
            <p className="whitespace-pre-wrap">{message.content}</p>
          )}
        </div>

        <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            onClick={copyToClipboard}
            className="text-muted-foreground hover:text-foreground rounded p-1 transition-colors"
            title="Copy"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          </button>
          {message.timestamp && (
            <span className="text-muted-foreground text-[10px]">
              {new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit" }).format(
                message.timestamp,
              )}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function TypingIndicator({ content }: { content: string }) {
  return (
    <span>
      {content}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="ml-0.5 inline-block h-4 w-0.5 bg-current align-text-bottom"
      />
    </span>
  )
}

function LoadingBubble() {
  return (
    <div className="flex gap-3">
      <Avatar size="sm" className="mt-1 shrink-0">
        <AvatarFallback className="bg-muted">
          <Bot className="h-3 w-3" />
        </AvatarFallback>
      </Avatar>
      <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="bg-muted-foreground h-1.5 w-1.5 rounded-full"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function ChatUI({
  messages,
  onSend,
  isLoading = false,
  placeholder = "Ask anything...",
  agentName = "AI Assistant",
  className,
  ...props
}: ChatUIProps) {
  const [input, setInput] = React.useState("")
  const bottomRef = React.useRef<HTMLDivElement>(null)
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  const handleSend = () => {
    if (!input.trim() || isLoading) return
    onSend(input.trim())
    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div
      className={cn(
        "border-border bg-background flex h-full flex-col overflow-hidden rounded-xl border",
        className,
      )}
      {...props}
    >
      {/* Header */}
      <div className="border-border bg-muted/30 flex items-center gap-3 border-b px-4 py-3">
        <div className="border-primary/20 bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full border">
          <Bot className="text-primary h-4 w-4" />
        </div>
        <div>
          <p className="text-sm font-medium">{agentName}</p>
          <div className="flex items-center gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            <p className="text-muted-foreground text-xs">Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto scroll-smooth p-4">
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isLoading && <LoadingBubble key="loading" />}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-border bg-muted/20 border-t p-4">
        <div className="flex items-end gap-2">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="max-h-32 min-h-[44px] resize-none"
            rows={1}
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            size="icon"
            className="shrink-0"
            loading={isLoading}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-muted-foreground mt-1.5 text-center text-[10px]">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  )
}
