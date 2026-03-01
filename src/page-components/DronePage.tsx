import Link from 'next/link';
import { Camera, WifiOff, Shield, Cpu, Mail } from 'lucide-react';
import { PrivacySection } from '../components/product/PrivacySection';
import { Button } from '../components/ui/Button';
export function DronePage() {
  return (
    <div className="bg-card min-h-screen pb-24">
      {/* Breadcrumbs */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Shilp Drone</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Gallery & Details */}
          <div className="lg:col-span-8 space-y-16">
            {/* Gallery Placeholder */}
            <div className="aspect-video bg-foreground rounded-2xl overflow-hidden border border-foreground/80 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-20" />
              <div className="relative z-10 w-64 h-32 bg-foreground/90 rounded-lg flex items-center justify-center border border-foreground/60 shadow-2xl">
                <div className="flex gap-16">
                  <div className="w-24 h-2 bg-primary rounded-full animate-pulse" />
                  <div className="w-24 h-2 bg-primary rounded-full animate-pulse" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full border-2 border-primary flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary-light rounded-full" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-xs text-muted-foreground font-mono">
                PROTOTYPE RENDER
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
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
                  className="bg-muted p-6 rounded-xl border border-border">

                    <div className="w-10 h-10 bg-card rounded-lg shadow-sm flex items-center justify-center mb-4 text-primary">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                )}
              </div>
            </div>

            <PrivacySection />

            <div className="bg-muted p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Development Roadmap
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <div className="w-0.5 h-full bg-primary/30" />
                  </div>
                  <div className="pb-6">
                    <h4 className="font-bold text-foreground">
                      Phase 1: Prototyping
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Initial flight controller design and frame testing.
                      (Completed)
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <div className="w-0.5 h-full bg-muted" />
                  </div>
                  <div className="pb-6">
                    <h4 className="font-bold text-foreground">
                      Phase 2: Beta Testing
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Field testing with select users in India. (Current)
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-muted-foreground/40 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-muted-foreground">
                      Phase 3: Public Launch
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Expected availability: Q4 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Buy Section */}
          <div className="lg:col-span-4">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-lg sticky top-24">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Shilp Drone
                </h1>
                <p className="text-muted-foreground">Consumer / Educational Drone</p>
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-foreground">
                  ₹12,999
                </span>
                <span className="text-sm font-semibold text-muted-foreground bg-muted px-2 py-1 rounded">
                  COMING SOON
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground text-sm leading-relaxed">
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
                    className="w-full rounded-lg border-border focus:ring-primary focus:border-primary" />

                  <Button
                    size="lg"
                    className="w-full"
                    rightIcon={<Mail className="w-4 h-4" />}>

                    Join Waitlist
                  </Button>
                </form>
                <p className="text-xs text-center text-muted-foreground">
                  No spam. Only product updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}
export default DronePage;
