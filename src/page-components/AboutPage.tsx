'use client';

import { motion } from 'framer-motion';
import { TrustBadge } from '../components/shared/TrustBadge';
import { Cpu, Shield, MapPin, Users, Zap, Heart } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';

const valueIcons = [Shield, Cpu, MapPin, Heart];

export function AboutPage() {
  const adminData = useAdminData();

  return (
    <div className="bg-card min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background to-card py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJoLTJ2LTJoMnptLTItMmgydjJoLTJ2LTJ6bTItMmgydjJoLTJ2LTJ6bTAtMmgydjJoLTJ2LTJ6bS0yLTJoMnYyaC0ydi0yem0yLTJoMnYyaC0ydi0yem0wLTJoMnYyaC0ydi0yem0tMi0yaDF2Mmgtdi0yem0yLTJoMnYyaC0ydi0yem0wLTJoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="text-center max-w-3xl mx-auto">

            <div className="flex justify-center gap-3 mb-8">
              <TrustBadge type="made-in-india" />
              <TrustBadge type="privacy-first" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              {adminData.about.heroTitle}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Shilp Sahayak was born from a simple question:{' '}
              <br className="hidden md:block" />
              <span className="text-foreground font-medium">
                {adminData.about.heroSubtitle}
              </span>
            </p>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{adminData.about.locationLabel}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>{adminData.about.teamLabel}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {adminData.about.storyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="relative">

            <div className="aspect-square bg-gradient-to-br from-muted to-background rounded-2xl border border-border flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
              <div className="relative z-10 text-center p-8">
                <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-2xl font-bold text-foreground mb-2">
                  100% Offline
                </p>
                <p className="text-muted-foreground">
                  Zero data latency, maximum privacy
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
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
            className="text-center mb-16">

            <h2 className="text-3xl font-bold text-foreground mb-4">
              {adminData.about.valuesTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {adminData.about.valuesSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adminData.about.values.map((value, index) =>
            <motion.div
              key={value.title}
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
              }}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/20 transition-colors">

                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {(() => {
                    const Icon = valueIcons[index] ?? Shield;
                    return <Icon className="w-6 h-6 text-primary" />;
                  })()}
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
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
          className="text-center mb-16">

          <h2 className="text-3xl font-bold text-foreground mb-4">
            {adminData.about.journeyTitle}
          </h2>
          <p className="text-lg text-muted-foreground">
            {adminData.about.journeySubtitle}
          </p>
        </motion.div>

        <div className="space-y-8">
          {adminData.about.timeline.map((item, index) =>
          <motion.div
            key={`${item.year}-${item.event}-${index}`}
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="flex gap-8 items-start">

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  {item.year.slice(-2)}
                </div>
                {index < adminData.about.timeline.length - 1 &&
              <div className="w-0.5 h-full bg-primary/30 mt-2" />
              }
              </div>
              <div className="pb-8">
                <h3 className="font-bold text-foreground text-lg mb-1">
                  {item.event}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-foreground text-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
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
            className="text-center">

            <div className="w-24 h-24 bg-foreground/90 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="w-12 h-12 text-primary-light" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{adminData.about.founderName}</h3>
            <p className="text-muted-foreground mb-8">{adminData.about.founderRole}</p>
            <blockquote className="text-xl md:text-2xl leading-relaxed italic max-w-3xl mx-auto">
              {adminData.about.founderQuote}
            </blockquote>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
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
          className="bg-gradient-to-br from-primary/10 to-info/10 rounded-2xl p-12 text-center border border-primary/20">

          <h2 className="text-3xl font-bold text-foreground mb-4">
            {adminData.about.ctaTitle}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {adminData.about.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={adminData.about.ctaPrimaryHref}
              className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors">

              {adminData.about.ctaPrimaryLabel}
            </a>
            <a
              href={adminData.about.ctaSecondaryHref}
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-foreground text-foreground rounded-lg font-medium hover:bg-muted transition-colors">

              {adminData.about.ctaSecondaryLabel}
            </a>
          </div>
        </motion.div>
      </div>
    </div>);

}
export default AboutPage;
