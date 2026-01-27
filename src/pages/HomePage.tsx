import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ValuePropsSection } from '../components/home/ValuePropsSection';
import { FeaturedProduct } from '../components/home/FeaturedProduct';
export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuePropsSection />
      <FeaturedProduct />

      {/* Newsletter / Community Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Join the Offline Movement
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            We're building a community of people who value focus, privacy, and
            ethical technology. Sign up for updates on new products and firmware
            features.
          </p>
          <form
            className="max-w-md mx-auto flex gap-2"
            onSubmit={(e) => e.preventDefault()}>

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500" />

            <button
              type="submit"
              className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors">

              Join
            </button>
          </form>
        </div>
      </section>
    </div>);

}