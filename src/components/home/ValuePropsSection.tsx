'use client';

import { motion } from 'framer-motion';
import { WifiOff, ShieldCheck, Cpu, IndianRupee } from 'lucide-react';
import { AdminData } from '../../lib/admin-data';

const iconMap = {
  'wifi-off': WifiOff,
  'shield-check': ShieldCheck,
  cpu: Cpu,
  'indian-rupee': IndianRupee
};

interface ValuePropsSectionProps {
  content: AdminData['home']['valueProps'];
}

export function ValuePropsSection({ content }: ValuePropsSectionProps) {
  return (
    <div className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            {content.eyebrow}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {content.title}
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {content.subtitle}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {content.items.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
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

                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />

                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>);
            })}
          </dl>
        </div>
      </div>
    </div>);

}
