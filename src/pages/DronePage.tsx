import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, WifiOff, Shield, Cpu, Mail } from 'lucide-react';
import { PrivacySection } from '../components/product/PrivacySection';
import { TrustBadge } from '../components/shared/TrustBadge';
import { Button } from '../components/ui/Button';
export function DronePage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Breadcrumbs */}
      <div className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-teal-600">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-teal-600">
              Products
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Shilp Drone</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Gallery & Details */}
          <div className="lg:col-span-8 space-y-16">
            {/* Gallery Placeholder */}
            <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-20" />
              <div className="relative z-10 w-64 h-32 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-600 shadow-2xl">
                <div className="flex gap-16">
                  <div className="w-24 h-2 bg-teal-500 rounded-full animate-pulse" />
                  <div className="w-24 h-2 bg-teal-500 rounded-full animate-pulse" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full border-2 border-teal-500 flex items-center justify-center">
                  <div className="w-4 h-4 bg-teal-400 rounded-full" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-xs text-slate-500 font-mono">
                PROTOTYPE RENDER
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Learn to fly, safely
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                {
                  icon: WifiOff,
                  title: 'Local Control',
                  desc: 'Direct RF connection to controller. No cloud latency, no forced login.'
                },
                {
                  icon: Camera,
                  title: 'HD Camera',
                  desc: '1080p recording to local SD card. Your footage stays with you.'
                },
                {
                  icon: Shield,
                  title: 'Safety First',
                  desc: 'Built-in geofencing and altitude limits for safe learning.'
                },
                {
                  icon: Cpu,
                  title: 'Programmable',
                  desc: 'Open API for students to program flight paths locally.'
                }].
                map((feature, i) =>
                <div
                  key={i}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100">

                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-teal-600">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600">{feature.desc}</p>
                  </div>
                )}
              </div>
            </div>

            <PrivacySection />

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Development Roadmap
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-teal-500 rounded-full" />
                    <div className="w-0.5 h-full bg-teal-200" />
                  </div>
                  <div className="pb-6">
                    <h4 className="font-bold text-slate-900">
                      Phase 1: Prototyping
                    </h4>
                    <p className="text-sm text-slate-600">
                      Initial flight controller design and frame testing.
                      (Completed)
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-teal-500 rounded-full" />
                    <div className="w-0.5 h-full bg-slate-200" />
                  </div>
                  <div className="pb-6">
                    <h4 className="font-bold text-slate-900">
                      Phase 2: Beta Testing
                    </h4>
                    <p className="text-sm text-slate-600">
                      Field testing with select users in India. (Current)
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-slate-300 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-500">
                      Phase 3: Public Launch
                    </h4>
                    <p className="text-sm text-slate-500">
                      Expected availability: Q4 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Buy Section */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg sticky top-24">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                  Shilp Drone
                </h1>
                <p className="text-slate-500">Consumer / Educational Drone</p>
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-slate-900">
                  ₹12,999
                </span>
                <span className="text-sm font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded">
                  COMING SOON
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-slate-600 text-sm leading-relaxed">
                  We are currently finalizing the design and firmware. Join the
                  waitlist to get notified when pre-orders open.
                </p>
              </div>

              <div className="space-y-3">
                <form
                  className="space-y-3"
                  onSubmit={(e) => e.preventDefault()}>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500" />

                  <Button
                    size="lg"
                    className="w-full"
                    rightIcon={<Mail className="w-4 h-4" />}>

                    Join Waitlist
                  </Button>
                </form>
                <p className="text-xs text-center text-slate-400">
                  No spam. Only product updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}