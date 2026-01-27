import React from 'react';
import { ShieldCheck, ServerOff, Code2 } from 'lucide-react';
export function VisionPage() {
  return (
    <div className="bg-slate-900 min-h-screen text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Offline Manifesto
          </h1>
          <p className="text-xl text-slate-400">
            If a product can work offline, it should.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <ShieldCheck className="w-10 h-10 text-teal-400 mb-6" />
            <h3 className="text-xl font-bold mb-4">Privacy is a Human Right</h3>
            <p className="text-slate-400 leading-relaxed">
              Privacy isn't a toggle in settings. It's a fundamental design
              requirement. We design hardware that physically cannot violate
              your privacy.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <ServerOff className="w-10 h-10 text-teal-400 mb-6" />
            <h3 className="text-xl font-bold mb-4">Local Processing</h3>
            <p className="text-slate-400 leading-relaxed">
              Cloud computing has its place, but not in your bedroom. With
              modern chips, we can run AI and logic locally on the device.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <Code2 className="w-10 h-10 text-teal-400 mb-6" />
            <h3 className="text-xl font-bold mb-4">Open & Transparent</h3>
            <p className="text-slate-400 leading-relaxed">
              We believe in the right to repair and the right to know what your
              hardware is doing. Our long-term goal is to open-source our
              firmware.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-12 border border-teal-800 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Roadmap</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center text-left">
              <div className="bg-teal-500 text-slate-900 font-bold px-4 py-1 rounded-full text-sm">
                Phase 1
              </div>
              <p className="text-lg">
                Launch Micro Bot - Demonstrate viable offline AI companion.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center text-left opacity-75">
              <div className="bg-slate-700 text-slate-300 font-bold px-4 py-1 rounded-full text-sm">
                Phase 2
              </div>
              <p className="text-lg">
                Expand to Home Automation - Offline smart plugs and sensors.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center text-left opacity-50">
              <div className="bg-slate-800 text-slate-500 font-bold px-4 py-1 rounded-full text-sm">
                Phase 3
              </div>
              <p className="text-lg">
                Open Source Hardware Platform for ethical IoT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>);

}