'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, WifiOff } from 'lucide-react';
import { Button } from '../ui/Button';
import { TrustBadge } from '../shared/TrustBadge';
import { AdminData } from '../../lib/admin-data';

interface HeroSectionProps {
  content: AdminData['home']['hero'];
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-muted pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="text-center lg:text-left">

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              {content.trustBadges.map((badge) => (
                <TrustBadge key={badge} type={badge} />
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
              {content.title} <br />
              <span className="text-primary">{content.highlightedTitle}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {content.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href={content.primaryCtaHref}>
                <Button
                  size="lg"
                  rightIcon={<ChevronRight className="w-4 h-4" />}>

                  {content.primaryCtaLabel}
                </Button>
              </Link>
              <Link href={content.secondaryCtaHref}>
                <Button variant="outline" size="lg">
                  {content.secondaryCtaLabel}
                </Button>
              </Link>
            </div>

            <p className="mt-6 text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
              <WifiOff className="w-4 h-4" />
              <span>{content.footnote}</span>
            </p>
          </motion.div>

          {/* Hero Image / Product Visualization */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="relative">

            {/* Abstract Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />

            {/* Product Placeholder - In a real app this would be a 3D render or high-res photo */}
            <div className="relative mx-auto w-72 h-72 sm:w-96 sm:h-96 bg-foreground rounded-3xl shadow-2xl flex items-center justify-center border-4 border-foreground/90">
              {/* Screen Glow Effect */}
              <div className="absolute inset-4 bg-foreground rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Breathing LED Effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-info/25 rounded-full blur-xl animate-pulse" />

                  {/* Bot Face */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8">
                    <div className="w-12 h-4 bg-info rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-blink" />
                    <div className="w-12 h-4 bg-info rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-blink" />
                  </div>
                </div>
              </div>

              {/* Reflection/Gloss */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none rounded-r-3xl" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{
                y: 20,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{
                delay: 1,
                duration: 0.5
              }}
              className="absolute -bottom-6 -right-6 md:bottom-10 md:right-10 bg-card p-4 rounded-xl shadow-xl border border-border max-w-[200px]">

              <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">
                {content.floatingBadgeTitle}
              </p>
              <p className="text-xs text-muted-foreground">
                {content.floatingBadgeSubtitle}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}
