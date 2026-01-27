import React from 'react';
import { motion } from 'framer-motion';
import { WifiOff, ShieldCheck, Cpu, IndianRupee } from 'lucide-react';
const features = [
{
  name: '100% Offline',
  description:
  'No Wi-Fi, no cloud, no servers. Your device works perfectly without an internet connection.',
  icon: WifiOff
},
{
  name: 'No Data Collection',
  description:
  'We believe your data belongs to you. We literally cannot see, store, or sell your information.',
  icon: ShieldCheck
},
{
  name: 'Made in India',
  description:
  'Designed, engineered, and manufactured locally in Patiala. Supporting Indian innovation.',
  icon: Cpu
},
{
  name: 'Affordable',
  description:
  "Premium technology at accessible prices. High-quality electronics shouldn't cost a fortune.",
  icon: IndianRupee
}];

export function ValuePropsSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-600">
            Why Shilp Sahayak?
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Technology that respects you
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We're building a future where smart devices don't spy on you.
            Simple, ethical, and powerful tools for your daily life.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) =>
            <motion.div
              key={feature.name}
              className="flex flex-col"
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}>

                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-teal-50">
                    <feature.icon
                    className="h-6 w-6 text-teal-600"
                    aria-hidden="true" />

                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            )}
          </dl>
        </div>
      </div>
    </div>);

}