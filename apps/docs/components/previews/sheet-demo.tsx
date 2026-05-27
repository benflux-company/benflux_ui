"use client"

import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@benflux-ui/react"

export function SheetDemo() {
  return (
    <div className="flex gap-3">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open Right</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit Profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="py-6 text-sm text-muted-foreground">
            Your profile settings and preferences appear here.
          </div>
          <SheetFooter>
            <Button>Save Changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open Left</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Browse through the application sections.</SheetDescription>
          </SheetHeader>
          <div className="py-6 text-sm text-muted-foreground">Navigation links appear here.</div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
