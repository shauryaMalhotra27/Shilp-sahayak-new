import React from 'react';
import { TrustBadge } from '../components/shared/TrustBadge';
export function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TrustBadge type="made-in-india" className="mb-6" />
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Engineering with a Conscience
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Shilp Sahayak was born from a simple question: Why does every smart
            device need to spy on us?
          </p>
        </div>

        <div className="prose prose-slate prose-lg mx-auto">
          <p>
            We are a small team of engineers, designers, and privacy advocates
            based in Patiala, Punjab. In a world where "smart" usually means
            "connected to the cloud," we're taking a different path.
          </p>

          <h3>The Problem</h3>
          <p>
            Modern electronics have become surveillance tools. Your vacuum
            cleaner maps your home, your speaker listens to your conversations,
            and your thermostat sells your usage data. We believe technology
            should serve you, not track you.
          </p>

          <h3>Our Solution</h3>
          <p>
            We build <strong>Local-First IoT</strong>. Our devices are powerful,
            intelligent, and helpful—but they don't talk to the internet. All
            processing happens on the chip inside the device. This means:
          </p>
          <ul>
            <li>Zero data latency (it's faster!)</li>
            <li>100% Privacy (physically impossible to leak data)</li>
            <li>Works anywhere (no Wi-Fi needed)</li>
          </ul>

          <h3>Made in India</h3>
          <p>
            We are proud to design and assemble our products in India. From the
            PCB design to the final assembly, we are building local capacity for
            high-quality consumer electronics.
          </p>
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-slate-200 rounded-full" />{' '}
            {/* Founder Avatar Placeholder */}
            <div>
              <h4 className="font-bold text-slate-900">Ratanabh Sharma</h4>
              <p className="text-sm text-slate-500">Founder & Lead Engineer</p>
            </div>
          </div>
          <p className="text-slate-600 italic">
            "We're not just selling gadgets. We're proving that you can build
            profitable, useful technology without exploiting user data. Shilp
            Sahayak is our contribution to a more ethical internet of things."
          </p>
        </div>
      </div>
    </div>);

}