import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, WifiOff } from 'lucide-react';
import { Button } from '../ui/Button';
import { TrustBadge } from '../shared/TrustBadge';
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 lg:pt-32 lg:pb-40">
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
              <TrustBadge type="privacy-first" />
              <TrustBadge type="offline-only" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              Privacy-first electronics. <br />
              <span className="text-teal-600">Built to work offline.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Meet Micro Bot — your intelligent, offline desktop companion.
              Designed for focus and productivity without the surveillance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/product">
                <Button
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}>

                  View Micro Bot
                </Button>
              </Link>
              <Link to="/vision">
                <Button variant="outline" size="lg">
                  Our Vision
                </Button>
              </Link>
            </div>

            <p className="mt-6 text-sm text-slate-500 flex items-center justify-center lg:justify-start gap-2">
              <WifiOff className="w-4 h-4" />
              <span>No Wi-Fi required. No data collection.</span>
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-3xl -z-10" />

            {/* Product Placeholder - In a real app this would be a 3D render or high-res photo */}
            <div className="relative mx-auto w-72 h-72 sm:w-96 sm:h-96 bg-slate-900 rounded-3xl shadow-2xl flex items-center justify-center border-4 border-slate-800">
              {/* Screen Glow Effect */}
              <div className="absolute inset-4 bg-slate-950 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Breathing LED Effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />

                  {/* Bot Face */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8">
                    <div className="w-12 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-blink" />
                    <div className="w-12 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-blink" />
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
              className="absolute -bottom-6 -right-6 md:bottom-10 md:right-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[200px]">

              <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                Made in India
              </p>
              <p className="text-xs text-slate-500">
                Engineered & Assembled in Patiala, Punjab
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}