import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const specs = [
{
  category: 'Hardware',
  items: [
  {
    label: 'Processor',
    value: 'Dual-core 240MHz RISC-V (Made in India)'
  },
  {
    label: 'Display',
    value: '1.3 inch OLED (128x64)'
  },
  {
    label: 'Sensors',
    value: 'Capacitive touch, Microphone, Ambient Light'
  },
  {
    label: 'Connectivity',
    value: 'USB-C (Data & Power)'
  }]

},
{
  category: 'Dimensions & Materials',
  items: [
  {
    label: 'Height',
    value: '85 mm'
  },
  {
    label: 'Width',
    value: '60 mm'
  },
  {
    label: 'Weight',
    value: '120g'
  },
  {
    label: 'Body',
    value: 'Recycled Polycarbonate + Matte Finish'
  }]

},
{
  category: 'Power',
  items: [
  {
    label: 'Battery',
    value: '1200mAh Li-ion'
  },
  {
    label: 'Battery Life',
    value: '10-14 days (typical usage)'
  },
  {
    label: 'Charging Time',
    value: '1.5 hours'
  }]

}];

export function SpecsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-foreground mb-6">
        Technical Specifications
      </h3>

      {specs.map((section, idx) =>
      <div
        key={idx}
        className="border border-border rounded-lg overflow-hidden">

          <button
          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          className="w-full flex items-center justify-between p-4 bg-muted hover:bg-muted transition-colors text-left">

            <span className="font-semibold text-foreground">
              {section.category}
            </span>
            <ChevronDown
            className={`w-5 h-5 text-muted-foreground transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />

          </button>

          <AnimatePresence>
            {openIndex === idx &&
          <motion.div
            initial={{
              height: 0
            }}
            animate={{
              height: 'auto'
            }}
            exit={{
              height: 0
            }}
            className="overflow-hidden">

                <div className="p-4 bg-card border-t border-border space-y-3">
                  {section.items.map((item, i) =>
              <div key={i} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="text-foreground font-medium">
                        {item.value}
                      </span>
                    </div>
              )}
                </div>
              </motion.div>
          }
          </AnimatePresence>
        </div>
      )}
    </div>);

}