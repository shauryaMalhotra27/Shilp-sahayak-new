'use client';

import { ShieldCheck, ServerOff, Code2 } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';

const pillarIcons = [ShieldCheck, ServerOff, Code2];

export function VisionPage() {
  const adminData = useAdminData();

  return (
    <div className="bg-card min-h-screen text-foreground py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {adminData.vision.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {adminData.vision.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {adminData.vision.pillars.map((pillar, index) => {
            const Icon = pillarIcons[index] ?? ShieldCheck;
            return (
              <div key={pillar.title} className="bg-muted p-8 rounded-2xl border border-border">
                <Icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-muted rounded-3xl p-12 border border-primary/20 text-center">
          <h2 className="text-3xl font-bold mb-6">{adminData.vision.roadmapTitle}</h2>
          <div className="space-y-8">
            {adminData.vision.roadmap.map((item) => (
              <div
                key={item.phase}
                className="flex flex-col md:flex-row gap-4 items-center justify-center text-left"
                style={{ opacity: item.opacity }}
              >
                <div
                  className={`font-bold px-4 py-1 rounded-full text-sm ${
                    item.phase === 'Phase 1'
                      ? 'bg-primary text-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {item.phase}
                </div>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>);

}
export default VisionPage;
