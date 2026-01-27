import React from 'react';
import { ProductGallery } from '../components/product/ProductGallery';
import { FeatureGrid } from '../components/product/FeatureGrid';
import { PrivacySection } from '../components/product/PrivacySection';
import { SpecsAccordion } from '../components/product/SpecsAccordion';
import { BuySection } from '../components/product/BuySection';
import { TrustBadge } from '../components/shared/TrustBadge';
import { Link } from 'react-router-dom';
export function MicroBotPage() {
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
            <span className="text-slate-900 font-medium">Micro Bot</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Gallery & Details */}
          <div className="lg:col-span-8 space-y-16">
            <ProductGallery />

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Features designed for humans
              </h2>
              <FeatureGrid />
            </div>

            <PrivacySection />

            <div className="grid md:grid-cols-2 gap-12">
              <SpecsAccordion />

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 h-fit">
                <h3 className="font-bold text-slate-900 mb-4">
                  What's in the box
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    Micro Bot Unit
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    USB-C Braided Cable (1.5m)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    User Manual & Sticker Pack
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    Warranty Card
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Buy Section */}
          <div className="lg:col-span-4">
            <BuySection
              productId="micro-bot"
              name="Micro Bot"
              price={2999}
              status="Available" />


            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              <TrustBadge type="made-in-india" />
              <TrustBadge type="privacy-first" />
            </div>
          </div>
        </div>
      </div>
    </div>);

}