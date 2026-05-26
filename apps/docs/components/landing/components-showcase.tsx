"use client"

import { motion } from "framer-motion"
import {
  Button, Badge, Avatar, AvatarFallback, AvatarImage, AvatarGroup,
  Card, CardContent, CardHeader, CardTitle, CardDescription,
  Skeleton, SkeletonCard,
  Progress,
  BentoGrid, BentoCard,
  MagicCard,
} from "@benflux-ui/react"
import { Zap, Star, Users, ArrowRight } from "lucide-react"

export function ComponentsShowcase() {
  return (
    <section className="py-24 px-4 bg-muted/10">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Glimpse of the library
          </motion.h2>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A small taste of 200+ components
          </motion.p>
        </div>

        <BentoGrid columns={3}>
          {/* Buttons */}
          <BentoCard
            name="Buttons"
            description="9 variants, 6 sizes, loading states"
            colSpan={2}
            background={
              <div className="absolute inset-0 flex items-center justify-center gap-4 flex-wrap p-6 opacity-80">
                <Button variant="default">Default</Button>
                <Button variant="glow">Glow</Button>
                <Button variant="gradient">Gradient</Button>
                <Button variant="glass">Glass</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="destructive">Delete</Button>
                <Button loading>Loading</Button>
              </div>
            }
          />

          {/* Badges */}
          <BentoCard
            name="Badges"
            description="Status indicators with glow"
            background={
              <div className="absolute inset-0 flex items-center justify-center gap-2 flex-wrap p-6 opacity-80">
                <Badge variant="glow">New</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Beta</Badge>
                <Badge variant="destructive">Error</Badge>
                <Badge variant="gradient">Pro</Badge>
              </div>
            }
          />

          {/* Progress */}
          <BentoCard
            name="Progress"
            description="Animated progress bars"
            background={
              <div className="absolute inset-0 flex flex-col justify-center gap-4 p-6 opacity-80">
                <Progress value={72} variant="gradient" label="Download" showValue />
                <Progress value={45} variant="glow" label="Upload" showValue />
                <Progress value={88} variant="default" label="Storage" showValue />
              </div>
            }
          />

          {/* Magic Card */}
          <BentoCard
            name="Magic Card"
            description="Mouse-following gradient"
            colSpan={2}
            background={
              <div className="absolute inset-4 flex gap-4">
                <MagicCard className="flex-1 p-6 flex flex-col justify-between opacity-80">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-3">
                      <Zap className="h-4 w-4" />
                    </div>
                    <p className="font-semibold text-sm">Nebula Pro</p>
                    <p className="text-xs text-muted-foreground">Hover me</p>
                  </div>
                  <Button variant="glow" size="sm" rightIcon={<ArrowRight />}>Start</Button>
                </MagicCard>
                <MagicCard className="flex-1 p-6 flex flex-col justify-between opacity-80">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                      <Star className="h-4 w-4" />
                    </div>
                    <p className="font-semibold text-sm">Star Us</p>
                    <p className="text-xs text-muted-foreground">On GitHub</p>
                  </div>
                  <Button variant="outline" size="sm">GitHub</Button>
                </MagicCard>
              </div>
            }
          />
        </BentoGrid>
      </div>
    </section>
  )
}
