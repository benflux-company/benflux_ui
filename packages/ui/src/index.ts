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
export { Layout, Header, Content, Footer, Sider } from "./components/layout/layout"
export type {
  LayoutProps,
  LayoutHeaderProps,
  LayoutContentProps,
  LayoutFooterProps,
  SiderProps,
} from "./components/layout/layout"

export { Space, SpaceCompact } from "./components/layout/space"
export type { SpaceProps, SpaceCompactProps } from "./components/layout/space"

export { Flex } from "./components/layout/flex"
export type { FlexProps } from "./components/layout/flex"

export { Splitter, SplitterPanel } from "./components/layout/splitter"
export type { SplitterProps, SplitterPanelProps } from "./components/layout/splitter"

export { Heading, Text, Paragraph, TypographyLink } from "./components/layout/typography"
export type { HeadingProps, TextProps, ParagraphProps } from "./components/layout/typography"

export { List, ListItem, ListItemMeta } from "./components/layout/list"
export type { ListProps, ListItemProps } from "./components/layout/list"

export { Descriptions, DescriptionsItem } from "./components/layout/descriptions"
export type { DescriptionsProps, DescriptionsItemProps } from "./components/layout/descriptions"

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  cardVariants,
} from "./components/layout/card"
export type { CardProps } from "./components/layout/card"

export { Badge, badgeVariants } from "./components/layout/badge"
export type { BadgeProps } from "./components/layout/badge"

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  avatarVariants,
} from "./components/layout/avatar"
export type { AvatarProps, AvatarGroupProps } from "./components/layout/avatar"

export { Separator } from "./components/layout/separator"
export { ScrollArea, ScrollBar } from "./components/layout/scroll-area"
export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./components/layout/collapsible"
export { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./components/layout/resizable"
export { Tag, TagInput } from "./components/layout/tag"

// ─── Inputs ───────────────────────────────────────────────
export { InputNumber } from "./components/inputs/number-input"
export type { InputNumberProps } from "./components/inputs/number-input"

export { Segmented } from "./components/inputs/segmented"
export type { SegmentedProps, SegmentedOption } from "./components/inputs/segmented"

export { Upload } from "./components/inputs/upload"
export type { UploadProps, UploadFile } from "./components/inputs/upload"

export { TimePicker } from "./components/inputs/time-picker"
export type { TimePickerProps, TimeValue } from "./components/inputs/time-picker"

export { ColorPicker } from "./components/inputs/color-picker"
export type { ColorPickerProps } from "./components/inputs/color-picker"

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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./components/inputs/select"
export { Slider } from "./components/inputs/slider"
export { Toggle, ToggleGroup, ToggleGroupItem, toggleVariants } from "./components/inputs/toggle"
export { Rating } from "./components/inputs/rating"
export {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./components/inputs/otp-input"
export { Calendar } from "./components/inputs/calendar"
export type { CalendarProps } from "./components/inputs/calendar"
export { DatePicker, DateRangePicker } from "./components/inputs/date-picker"
export { Combobox, MultiCombobox } from "./components/inputs/combobox"

export { AutoComplete } from "./components/inputs/auto-complete"
export type { AutoCompleteProps, AutoCompleteOption } from "./components/inputs/auto-complete"

export { Cascader } from "./components/inputs/cascader"
export type { CascaderProps, CascaderOption } from "./components/inputs/cascader"

export { Mentions } from "./components/inputs/mentions"
export type { MentionsProps, MentionOption } from "./components/inputs/mentions"

export { TreeSelect } from "./components/inputs/tree-select"
export type { TreeSelectProps, TreeSelectNode } from "./components/inputs/tree-select"

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "./components/inputs/form"

// ─── Navigation ───────────────────────────────────────────
export { Affix } from "./components/navigation/affix"
export type { AffixProps } from "./components/navigation/affix"

export { Anchor } from "./components/navigation/anchor"
export type { AnchorProps, AnchorLinkItem } from "./components/navigation/anchor"

export { Menu } from "./components/navigation/menu"
export type { MenuProps, MenuItem } from "./components/navigation/menu"

export { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/navigation/tabs"

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./components/navigation/command"

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./components/navigation/dropdown-menu"

export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  SimpleTooltip,
} from "./components/navigation/tooltip"
export { Popover, PopoverContent, PopoverTrigger } from "./components/navigation/popover"

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/navigation/breadcrumb"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./components/navigation/pagination"

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "./components/navigation/sheet"

export { HoverCard, HoverCardContent, HoverCardTrigger } from "./components/navigation/hover-card"
export { Stepper } from "./components/navigation/stepper"
export type { Step } from "./components/navigation/stepper"

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./components/navigation/context-menu"

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "./components/navigation/drawer"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/navigation/carousel"

// ─── Feedback ─────────────────────────────────────────────
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "./components/feedback/dialog"

export { Toaster, toast } from "./components/feedback/toast"
export { Skeleton, SkeletonCard, SkeletonText } from "./components/feedback/skeleton"
export { Progress } from "./components/feedback/progress"

export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/feedback/accordion"
export { Alert, AlertTitle, AlertDescription } from "./components/feedback/alert"
export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/feedback/alert-dialog"
export { Spinner, LoadingOverlay, DotsSpinner } from "./components/feedback/spinner"

export { Result } from "./components/feedback/result"
export type { ResultProps, ResultStatus } from "./components/feedback/result"

export { Tour } from "./components/feedback/tour"
export type { TourProps, TourStep } from "./components/feedback/tour"

export { Watermark } from "./components/feedback/watermark"
export type { WatermarkProps } from "./components/feedback/watermark"

export { message, MessageProvider } from "./components/feedback/message"
export type { MessageConfig, MessageType } from "./components/feedback/message"

export { notification } from "./components/feedback/notification"
export type {
  NotificationConfig,
  NotificationType,
  NotificationPlacement,
} from "./components/feedback/notification"

export { Popconfirm } from "./components/feedback/popconfirm"
export type { PopconfirmProps } from "./components/feedback/popconfirm"

// ─── Data Display ─────────────────────────────────────────
export { CodeBlock } from "./components/data-display/code-block"

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/data-display/table"

export { DataTable, ArrowUpDown } from "./components/data-display/data-table"

export {
  ChartContainer,
  ChartTooltip,
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  CHART_COLORS,
} from "./components/data-display/chart"

export { Timeline } from "./components/data-display/timeline"
export type {} from "./components/data-display/timeline"

export { Statistic, StatisticCard } from "./components/data-display/statistic"
export { Empty } from "./components/data-display/empty"

export { Image, ImageGrid, ImageLightbox } from "./components/data-display/image-viewer"
export type {
  ImageProps,
  ImageGridProps,
  ImageGridItem,
} from "./components/data-display/image-viewer"

export { QRCode } from "./components/data-display/qrcode"
export type { QRCodeProps } from "./components/data-display/qrcode"

export { Tree } from "./components/data-display/tree"
export type { TreeProps, TreeDataNode } from "./components/data-display/tree"

export { Transfer } from "./components/data-display/transfer"
export type { TransferProps, TransferItem } from "./components/data-display/transfer"

export { Collapse } from "./components/data-display/collapse"
export type { CollapseProps, CollapseItem } from "./components/data-display/collapse"

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
export { FloatButton, FloatButtonBackTop, FloatButtonGroup } from "./components/wow/float-button"
export type { FloatButtonProps } from "./components/wow/float-button"
