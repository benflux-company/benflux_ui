"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, Loader2, Copy, Check, RotateCcw } from "lucide-react"
import { cn } from "@benflux-ui/utils"
import { Button } from "../inputs/button"
import { Avatar, AvatarFallback, AvatarImage } from "../layout/avatar"
import { Textarea } from "../inputs/textarea"

export interface ChatMessage {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  timestamp?: Date
  status?: "sending" | "sent" | "error" | "streaming"
}

interface ChatUIProps extends React.HTMLAttributes<HTMLDivElement> {
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
      className={cn("flex gap-3 group", isUser && "flex-row-reverse")}
    >
      <Avatar size="sm" className="shrink-0 mt-1">
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

      <div className={cn("flex flex-col gap-1 max-w-[80%]", isUser && "items-end")}>
        <div
          className={cn(
            "px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
            isUser
              ? "bg-primary text-primary-foreground rounded-tr-sm"
              : "bg-muted text-foreground rounded-tl-sm",
            message.status === "error" && "bg-destructive/10 border border-destructive/30",
          )}
        >
          {message.status === "streaming" ? (
            <TypingIndicator content={message.content} />
          ) : (
            <p className="whitespace-pre-wrap">{message.content}</p>
          )}
        </div>

        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={copyToClipboard}
            className="p-1 rounded text-muted-foreground hover:text-foreground transition-colors"
            title="Copy"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          </button>
          {message.timestamp && (
            <span className="text-[10px] text-muted-foreground">
              {new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit" }).format(message.timestamp)}
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
        className="inline-block w-0.5 h-4 bg-current ml-0.5 align-text-bottom"
      />
    </span>
  )
}

function LoadingBubble() {
  return (
    <div className="flex gap-3">
      <Avatar size="sm" className="shrink-0 mt-1">
        <AvatarFallback className="bg-muted">
          <Bot className="h-3 w-3" />
        </AvatarFallback>
      </Avatar>
      <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-muted">
        <div className="flex gap-1.5 items-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
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
    <div className={cn("flex flex-col h-full bg-background rounded-xl border border-border overflow-hidden", className)} {...props}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20">
          <Bot className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium">{agentName}</p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isLoading && <LoadingBubble key="loading" />}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border bg-muted/20">
        <div className="flex gap-2 items-end">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="min-h-[44px] max-h-32 resize-none"
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
        <p className="text-[10px] text-muted-foreground mt-1.5 text-center">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  )
}
