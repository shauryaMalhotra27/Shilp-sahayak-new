import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Battery, Zap, ShieldCheck } from 'lucide-react';
import { PrivacySection } from '../components/product/PrivacySection';
import { TrustBadge } from '../components/shared/TrustBadge';
import { BuySection } from '../components/product/BuySection';
export function PomodoroPage() {
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
            <span className="text-slate-900 font-medium">Pomodoro Device</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Gallery & Details */}
          <div className="lg:col-span-8 space-y-16">
            {/* Gallery Placeholder */}
            <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 flex items-center justify-center relative">
              <div className="w-64 h-64 bg-slate-800 rounded-full flex items-center justify-center shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full" />
                <div className="w-48 h-48 bg-slate-900 rounded-full flex items-center justify-center border-4 border-slate-700">
                  <span className="text-4xl font-mono text-orange-500 font-bold">
                    25:00
                  </span>
                </div>
                <div className="absolute -right-4 w-8 h-16 bg-slate-700 rounded-r-lg" />{' '}
                {/* Knob */}
              </div>
              <div className="absolute bottom-4 left-4 text-xs text-slate-400 font-mono">
                RENDER: Front View
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Deep work, simplified
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                {
                  icon: Clock,
                  title: 'Physical Controls',
                  desc: 'Tactile knob to set time. Click to start. No screens to distract you.'
                },
                {
                  icon: Zap,
                  title: 'Offline Cycles',
                  desc: 'Standard 25/5 min cycles built-in. Works completely without your phone.'
                },
                {
                  icon: ShieldCheck,
                  title: 'No App Needed',
                  desc: 'Zero digital footprint. No notifications, no syncing, just focus.'
                },
                {
                  icon: Battery,
                  title: 'Long Battery Life',
                  desc: 'Weeks of usage on a single charge via USB-C.'
                }].
                map((feature, i) =>
                <div
                  key={i}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100">

                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-orange-600">
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
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Technical Specifications
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-500">Dimensions</span>
                  <span className="font-medium">80mm x 80mm x 40mm</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-500">Weight</span>
                  <span className="font-medium">150g</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-500">Battery</span>
                  <span className="font-medium">800mAh Li-ion</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-500">Charging</span>
                  <span className="font-medium">USB-C</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-500">Display</span>
                  <span className="font-medium">7-Segment LED (Orange)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-500">Material</span>
                  <span className="font-medium">Matte Polycarbonate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Buy Section */}
          <div className="lg:col-span-4">
            <BuySection
              productId="pomodoro"
              name="Pomodoro Device"
              price={1499}
              status="Pre-Order" />


            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              <TrustBadge type="made-in-india" />
              <TrustBadge type="offline-only" />
            </div>
          </div>
        </div>
      </div>
    </div>);

}