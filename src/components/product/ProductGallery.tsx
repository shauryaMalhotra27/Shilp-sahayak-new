import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export function ProductGallery() {
  const [activeImage, setActiveImage] = useState(0);
  // Placeholder abstract representations for the product
  const images = [
  {
    id: 1,
    color: 'bg-foreground',
    accentBg: 'bg-info/20',
    accentDot: 'bg-info',
    label: 'Front View'
  },
  {
    id: 2,
    color: 'bg-foreground/90',
    accentBg: 'bg-primary/20',
    accentDot: 'bg-primary',
    label: 'Side Profile'
  },
  {
    id: 3,
    color: 'bg-foreground',
    accentBg: 'bg-accent/20',
    accentDot: 'bg-accent',
    label: 'In Use'
  },
  {
    id: 4,
    color: 'bg-foreground/90',
    accentBg: 'bg-warning/20',
    accentDot: 'bg-warning',
    label: 'Packaging'
  }];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full bg-muted rounded-2xl overflow-hidden border border-border">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{
              duration: 0.3
            }}
            className="absolute inset-0 flex items-center justify-center p-8">

            {/* Simulated 3D Product Render */}
            <div
              className={`w-full h-full ${images[activeImage].color} rounded-xl shadow-2xl relative flex items-center justify-center`}>

              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

              {/* Bot Face Simulation */}
              <div className="w-1/2 h-1/2 bg-foreground rounded-lg relative flex items-center justify-center overflow-hidden border-4 border-foreground/70">
                <div
                  className={`w-16 h-16 rounded-full ${images[activeImage].accentBg} blur-xl absolute`} />

                <div className="flex gap-4">
                  <div
                    className={`w-8 h-3 ${images[activeImage].accentDot} rounded-full shadow-[0_0_10px_currentColor]`} />

                  <div
                    className={`w-8 h-3 ${images[activeImage].accentDot} rounded-full shadow-[0_0_10px_currentColor]`} />

                </div>
              </div>

              <div className="absolute bottom-4 left-4 text-xs text-white/50 font-mono">
                RENDER: {images[activeImage].label}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((img, idx) =>
        <button
          key={img.id}
          onClick={() => setActiveImage(idx)}
          className={`aspect-square rounded-lg border-2 transition-all overflow-hidden ${activeImage === idx ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-border'}`}>

            <div
            className={`w-full h-full ${img.color} flex items-center justify-center`}>

              <div className={`w-4 h-4 rounded-full ${img.accentDot}`} />
            </div>
          </button>
        )}
      </div>
    </div>);

}
