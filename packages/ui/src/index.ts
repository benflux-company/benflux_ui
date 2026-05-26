// ─────────────────────────────────────────────────────────
//  Benflux UI — Main Export
// ─────────────────────────────────────────────────────────

// Provider & Theme (re-export from @benflux-ui/themes)
export { BenfluxProvider, useTheme } from "@benflux-ui/themes"
export type { ThemeName, NebulaTheme } from "@benflux-ui/themes"

// Utilities (re-export from @benflux-ui/utils)
export { cn, cva } from "@benflux-ui/utils"
export type { VariantProps } from "@benflux-ui/utils"

// ─── Layout ───────────────────────────────────────────────
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, cardVariants } from "./components/layout/card"
export type { CardProps } from "./components/layout/card"

export { Badge, badgeVariants } from "./components/layout/badge"
export type { BadgeProps } from "./components/layout/badge"

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup, avatarVariants } from "./components/layout/avatar"
export type { AvatarProps, AvatarGroupProps } from "./components/layout/avatar"

export { Separator } from "./components/layout/separator"
export { ScrollArea, ScrollBar } from "./components/layout/scroll-area"
export { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./components/layout/collapsible"
export { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./components/layout/resizable"
export { Tag, TagInput } from "./components/layout/tag"

// ─── Inputs ───────────────────────────────────────────────
export { Button, buttonVariants } from "./components/inputs/button"
export type { ButtonProps } from "./components/inputs/button"

export { Input, inputVariants } from "./components/inputs/input"
export type { InputProps } from "./components/inputs/input"

export { Textarea } from "./components/inputs/textarea"
export type { TextareaProps } from "./components/inputs/textarea"

export { Label } from "./components/inputs/label"
export { Checkbox } from "./components/inputs/checkbox"
export { Switch } from "./components/inputs/switch"
export { RadioGroup, RadioGroupItem } from "./components/inputs/radio-group"
export {
  Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton,
  SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue,
} from "./components/inputs/select"
export { Slider } from "./components/inputs/slider"
export { Toggle, ToggleGroup, ToggleGroupItem, toggleVariants } from "./components/inputs/toggle"
export { Rating } from "./components/inputs/rating"
export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "./components/inputs/otp-input"
export { Calendar } from "./components/inputs/calendar"
export type { CalendarProps } from "./components/inputs/calendar"
export { DatePicker, DateRangePicker } from "./components/inputs/date-picker"
export { Combobox, MultiCombobox } from "./components/inputs/combobox"
export {
  Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField,
} from "./components/inputs/form"

// ─── Navigation ───────────────────────────────────────────
export { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/navigation/tabs"

export {
  Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem,
  CommandList, CommandSeparator, CommandShortcut,
} from "./components/navigation/command"

export {
  DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup,
  DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub,
  DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger,
} from "./components/navigation/dropdown-menu"

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, SimpleTooltip } from "./components/navigation/tooltip"
export { Popover, PopoverContent, PopoverTrigger } from "./components/navigation/popover"

export {
  Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
  BreadcrumbPage, BreadcrumbSeparator,
} from "./components/navigation/breadcrumb"

export {
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink,
  PaginationNext, PaginationPrevious,
} from "./components/navigation/pagination"

export {
  Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader,
  SheetOverlay, SheetPortal, SheetTitle, SheetTrigger,
} from "./components/navigation/sheet"

export { HoverCard, HoverCardContent, HoverCardTrigger } from "./components/navigation/hover-card"
export { Stepper } from "./components/navigation/stepper"
export type { Step } from "./components/navigation/stepper"

export {
  ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup,
  ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup,
  ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub,
  ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger,
} from "./components/navigation/context-menu"

export {
  Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader,
  DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger,
} from "./components/navigation/drawer"

export {
  type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "./components/navigation/carousel"

// ─── Feedback ─────────────────────────────────────────────
export {
  Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader,
  DialogOverlay, DialogPortal, DialogTitle, DialogTrigger,
} from "./components/feedback/dialog"

export { Toaster, toast } from "./components/feedback/toast"
export { Skeleton, SkeletonCard, SkeletonText } from "./components/feedback/skeleton"
export { Progress } from "./components/feedback/progress"

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/feedback/accordion"
export { Alert, AlertTitle, AlertDescription } from "./components/feedback/alert"
export {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/feedback/alert-dialog"
export { Spinner, LoadingOverlay, DotsSpinner } from "./components/feedback/spinner"

// ─── Data Display ─────────────────────────────────────────
export { CodeBlock } from "./components/data-display/code-block"

export {
  Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow,
} from "./components/data-display/table"

export { DataTable, ArrowUpDown } from "./components/data-display/data-table"

export {
  ChartContainer, ChartTooltip, LineChart, BarChart, AreaChart, PieChart, RadarChart, CHART_COLORS,
} from "./components/data-display/chart"

export { Timeline } from "./components/data-display/timeline"
export type { } from "./components/data-display/timeline"

export { Statistic, StatisticCard } from "./components/data-display/statistic"
export { Empty } from "./components/data-display/empty"

// ─── AI ───────────────────────────────────────────────────
export { ChatUI } from "./components/ai/chat-ui"
export type { ChatMessage, ChatUIProps } from "./components/ai/chat-ui"

// ─── WOW Effects ──────────────────────────────────────────
export { AuroraBackground } from "./components/wow/aurora-background"
export { Meteors } from "./components/wow/meteors"
export { MagicCard } from "./components/wow/magic-card"
export { SpotlightCard, SpotlightText } from "./components/wow/spotlight"
export { Marquee } from "./components/wow/marquee"
export { AnimatedBeam } from "./components/wow/animated-beam"
export { AnimatedText, NumberCounter } from "./components/wow/animated-text"
export { BorderBeam, GlowingBorder } from "./components/wow/glowing-border"
export { ParticleSystem } from "./components/wow/particle-system"
export { BentoGrid, BentoCard } from "./components/wow/bento-grid"
