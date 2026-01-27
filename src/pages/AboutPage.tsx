import React from 'react';
import { motion } from 'framer-motion';
import { TrustBadge } from '../components/shared/TrustBadge';
import { Cpu, Shield, MapPin, Users, Zap, Heart } from 'lucide-react';
export function AboutPage() {
  const values = [
  {
    icon: Shield,
    title: 'Privacy First',
    description:
    'No cloud, no tracking, no data collection. Your devices work for you, not advertisers.'
  },
  {
    icon: Cpu,
    title: 'Engineering Excellence',
    description:
    'Built by engineers who care about craft, reliability, and doing things right.'
  },
  {
    icon: MapPin,
    title: 'Made in India',
    description:
    'Designed, engineered, and assembled in Patiala, Punjab. Supporting local innovation.'
  },
  {
    icon: Heart,
    title: 'Human-Centric',
    description:
    'Technology should enhance life, not exploit it. We build tools that respect you.'
  }];

  const timeline = [
  {
    year: '2023',
    event: 'Founded in Patiala',
    description: 'Started with a vision for ethical electronics'
  },
  {
    year: '2024',
    event: 'Micro Bot Launch',
    description: 'First offline-first companion device'
  },
  {
    year: '2024',
    event: 'Product Line Expansion',
    description: 'Pomodoro Device and Drone in development'
  },
  {
    year: '2025',
    event: 'Growing Community',
    description: 'Building a movement for privacy-first tech'
  }];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32">
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Engineering with a Conscience
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
              Shilp Sahayak was born from a simple question:{' '}
              <br className="hidden md:block" />
              <span className="text-slate-900 font-medium">
                Why does every smart device need to spy on us?
              </span>
            </p>

            <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>Patiala, Punjab</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-teal-600" />
                <span>Small Team, Big Mission</span>
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

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                We are a small team of engineers, designers, and privacy
                advocates based in Patiala, Punjab. In a world where "smart"
                usually means "connected to the cloud," we're taking a different
                path.
              </p>
              <p>
                Modern electronics have become surveillance tools. Your vacuum
                cleaner maps your home, your speaker listens to your
                conversations, and your thermostat sells your usage data.
                <strong className="text-slate-900">
                  {' '}
                  We believe technology should serve you, not track you.
                </strong>
              </p>
              <p>
                That's why we build{' '}
                <strong className="text-slate-900">Local-First IoT</strong>. Our
                devices are powerful, intelligent, and helpful—but they don't
                talk to the internet. All processing happens on the chip inside
                the device.
              </p>
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

            <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 to-transparent" />
              <div className="relative z-10 text-center p-8">
                <Zap className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <p className="text-2xl font-bold text-slate-900 mb-2">
                  100% Offline
                </p>
                <p className="text-slate-600">
                  Zero data latency, maximum privacy
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="bg-slate-50 py-20">
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

            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our values aren't just words on a page—they're the foundation of
              every product we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) =>
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
              className="bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-200 transition-colors">

                <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
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

          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-slate-600">
            Building the future of ethical electronics, one step at a time.
          </p>
        </motion.div>

        <div className="space-y-8">
          {timeline.map((item, index) =>
          <motion.div
            key={item.year}
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
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  {item.year.slice(-2)}
                </div>
                {index < timeline.length - 1 &&
              <div className="w-0.5 h-full bg-teal-200 mt-2" />
              }
              </div>
              <div className="pb-8">
                <h3 className="font-bold text-slate-900 text-lg mb-1">
                  {item.event}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-slate-900 text-white py-20">
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

            <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="w-12 h-12 text-teal-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Ratanabh Sharma</h3>
            <p className="text-slate-400 mb-8">Founder & Lead Engineer</p>
            <blockquote className="text-xl md:text-2xl leading-relaxed italic max-w-3xl mx-auto">
              "We're not just selling gadgets. We're proving that you can build
              profitable, useful technology without exploiting user data. Shilp
              Sahayak is our contribution to a more ethical internet of things."
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
          className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-12 text-center border border-teal-100">

          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Join the Movement
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We're building a future where smart devices respect your privacy.
            Explore our products and be part of the change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">

              Explore Products
            </a>
            <a
              href="/vision"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg font-medium hover:bg-slate-50 transition-colors">

              Read Our Vision
            </a>
          </div>
        </motion.div>
      </div>
    </div>);

}