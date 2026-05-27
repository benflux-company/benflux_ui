"use client"

import * as React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  AuroraBackground,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Empty,
  Input,
  Label,
  Marquee,
  Meteors,
  Progress,
  Rating,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  Slider,
  Spinner,
  Spotlight,
  Statistic,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tag,
  Textarea,
  Timeline,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@benflux-ui/react"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="border-b border-border pb-2 text-xl font-semibold tracking-tight">{title}</h2>
      <div className="flex flex-wrap items-start gap-3">{children}</div>
    </section>
  )
}

export default function DemoPage() {
  const [progress, setProgress] = React.useState(60)
  const [checked, setChecked] = React.useState(false)
  const [switched, setSwitched] = React.useState(false)
  const [slider, setSlider] = React.useState([40])
  const [rating, setRating] = React.useState(3)

  return (
    <TooltipProvider>
      <main className="mx-auto min-h-screen max-w-5xl space-y-12 bg-background p-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Benflux UI — Demo</h1>
          <p className="text-muted-foreground">All components imported from @benflux-ui/react</p>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Demo</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Button */}
        <Section title="Button">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="gradient">Gradient</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </Section>

        {/* Badge & Tag */}
        <Section title="Badge & Tag">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Tag>Tag</Tag>
          <Tag color="blue">Blue</Tag>
          <Tag color="green">Green</Tag>
          <Tag onRemove={() => {}}>Closable</Tag>
        </Section>

        {/* Avatar */}
        <Section title="Avatar">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>BF</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
        </Section>

        {/* Card */}
        <Section title="Card">
          <Card className="w-56">
            <CardHeader>
              <CardTitle>Default</CardTitle>
              <CardDescription>Card description</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Card body.</p>
            </CardContent>
          </Card>
          <Card variant="glass" className="w-56">
            <CardHeader>
              <CardTitle>Glass</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Glass variant.</p>
            </CardContent>
          </Card>
          <Card variant="glow" className="w-56">
            <CardHeader>
              <CardTitle>Glow</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Glow variant.</p>
            </CardContent>
          </Card>
        </Section>

        {/* Select */}
        <Section title="Select">
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
              <SelectItem value="svelte">Svelte</SelectItem>
              <SelectItem value="angular">Angular</SelectItem>
            </SelectContent>
          </Select>
        </Section>

        {/* Input / Textarea */}
        <Section title="Input & Textarea">
          <Input placeholder="Enter text..." className="w-64" />
          <Input type="email" placeholder="Email address" className="w-64" />
          <Textarea placeholder="Multi-line input..." className="w-64" rows={3} />
        </Section>

        {/* Controls */}
        <Section title="Controls">
          <div className="flex items-center gap-2">
            <Checkbox id="cb" checked={checked} onCheckedChange={(v) => setChecked(!!v)} />
            <Label htmlFor="cb">Checkbox {checked ? "✓" : "○"}</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={switched} onCheckedChange={setSwitched} />
            <Label>Switch {switched ? "ON" : "OFF"}</Label>
          </div>
          <Toggle>Bold</Toggle>
          <Toggle variant="outline">Italic</Toggle>
          <div className="w-48 space-y-2">
            <Label>Slider: {slider[0]}</Label>
            <Slider value={slider} onValueChange={setSlider} max={100} step={1} />
          </div>
          <div className="space-y-1">
            <Label>Rating: {rating}/5</Label>
            <Rating value={rating} onChange={setRating} />
          </div>
        </Section>

        {/* Progress / Skeleton / Spinner */}
        <Section title="Feedback">
          <div className="w-64 space-y-2">
            <Label>Progress: {progress}%</Label>
            <Progress value={progress} />
            <Button size="sm" onClick={() => setProgress((p) => Math.min(100, p + 10))}>
              +10%
            </Button>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-40" />
          </div>
          <div className="flex items-center gap-4">
            <Spinner />
            <Spinner size="lg" />
          </div>
        </Section>

        {/* Alert */}
        <Section title="Alert">
          <Alert className="w-96">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>This is a default alert.</AlertDescription>
          </Alert>
          <Alert variant="destructive" className="w-96">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Something went wrong.</AlertDescription>
          </Alert>
          <Alert variant="success" className="w-96">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Operation completed.</AlertDescription>
          </Alert>
        </Section>

        {/* Tabs */}
        <Section title="Tabs">
          <Tabs defaultValue="tab1" className="w-96">
            <TabsList>
              <TabsTrigger value="tab1">Overview</TabsTrigger>
              <TabsTrigger value="tab2">Analytics</TabsTrigger>
              <TabsTrigger value="tab3">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-2 rounded-md border border-border p-4">
              <p className="text-sm text-muted-foreground">Overview content.</p>
            </TabsContent>
            <TabsContent value="tab2" className="mt-2 rounded-md border border-border p-4">
              <p className="text-sm text-muted-foreground">Analytics content.</p>
            </TabsContent>
            <TabsContent value="tab3" className="mt-2 rounded-md border border-border p-4">
              <p className="text-sm text-muted-foreground">Settings content.</p>
            </TabsContent>
          </Tabs>
        </Section>

        {/* Accordion */}
        <Section title="Accordion">
          <Accordion type="single" collapsible className="w-96">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes, follows WAI-ARIA patterns.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>Yes, comes with Tailwind CSS styles.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        {/* Dialog */}
        <Section title="Dialog">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">Dialog body content.</p>
              <Button className="mt-4 w-full">Confirm</Button>
            </DialogContent>
          </Dialog>
        </Section>

        {/* Tooltip */}
        <Section title="Tooltip">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>This is a tooltip</TooltipContent>
          </Tooltip>
        </Section>

        {/* Statistic */}
        <Section title="Statistic">
          <Statistic title="Total Users" value={12834} prefix="👥" />
          <Statistic title="Revenue" value={48392} prefix="$" suffix="USD" />
          <Statistic title="Growth" value={23.5} suffix="%" trend={23.5} />
        </Section>

        {/* Timeline */}
        <Section title="Timeline">
          <Timeline
            className="w-80"
            items={[
              { title: "Project started", description: "Jan 2024", status: "completed" },
              { title: "Beta release", description: "Mar 2024", status: "completed" },
              { title: "Public launch", description: "May 2024", status: "active" },
              { title: "v2.0", description: "Q4 2024", status: "pending" },
            ]}
          />
        </Section>

        {/* Empty */}
        <Section title="Empty">
          <Empty description="No data available" className="w-64" />
        </Section>

        {/* WOW Effects */}
        <Section title="WOW Effects — Marquee">
          <div className="w-full overflow-hidden rounded-xl border border-border">
            <Marquee className="py-3" pauseOnHover gap={32}>
              {[
                "React",
                "Next.js",
                "Tailwind",
                "TypeScript",
                "Framer Motion",
                "Radix UI",
                "Benflux UI",
              ].map((name) => (
                <Badge key={name} variant="outline" className="px-3 py-1 text-sm">
                  {name}
                </Badge>
              ))}
            </Marquee>
          </div>
        </Section>

        <div className="relative h-48 overflow-hidden rounded-2xl">
          <Meteors number={15} />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xl font-bold text-white drop-shadow-lg">Meteors Effect</p>
          </div>
        </div>

        <Separator />
        <p className="pb-8 text-center text-sm text-muted-foreground">
          Benflux UI Demo · {new Date().getFullYear()}
        </p>
      </main>
    </TooltipProvider>
  )
}
