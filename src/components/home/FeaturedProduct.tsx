import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/Button';
export function FeaturedProduct() {
  return (
    <section className="bg-slate-900 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-800 overflow-hidden border border-slate-700">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto bg-slate-800 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-slate-900/50" />
              {/* Product Representation */}
              <div className="relative w-48 h-48 lg:w-80 lg:h-80 bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 flex items-center justify-center group">
                <div className="w-3/4 h-3/4 bg-slate-950 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="space-y-2">
                      <div className="flex gap-4 justify-center">
                        <div className="w-8 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
                        <div className="w-8 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
                      </div>
                      <div className="w-4 h-1 bg-cyan-500/50 rounded-full mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/30 border border-teal-800 text-teal-400 text-xs font-semibold w-fit mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Now Available
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Micro Bot
              </h2>
              <p className="text-xl text-slate-400 mb-8">
                Your offline desk companion. Focus better, track habits, and add
                a touch of life to your workspace without sacrificing privacy.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                'Expressive OLED face with mood tracking',
                'Sound-reactive behavior (processed locally)',
                'Pomodoro focus timer built-in',
                '10+ day battery life'].
                map((item, i) =>
                <li key={i} className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-teal-500 mr-3 shrink-0" />
                    {item}
                  </li>
                )}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/product">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto">

                    Buy Now - ₹2,999
                  </Button>
                </Link>
                <Link to="/product">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto text-white border-slate-600 hover:bg-slate-700 hover:text-white hover:border-slate-500">

                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}