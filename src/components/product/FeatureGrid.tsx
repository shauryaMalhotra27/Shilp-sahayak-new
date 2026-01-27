import React from 'react';
import { Mic, Battery, Smile, Hand, Zap, Moon } from 'lucide-react';
const features = [
{
  icon: Smile,
  title: 'Expressive OLED Face',
  desc: 'Communicates through eyes and expressions. No creepy cameras, just pure emotion.'
},
{
  icon: Hand,
  title: 'Touch Interaction',
  desc: 'Pet the head to calm it down or wake it up. Capacitive touch sensors built-in.'
},
{
  icon: Mic,
  title: 'Sound Reactive',
  desc: 'Dances to your music or listens to you speak. All audio processing happens locally on the chip.'
},
{
  icon: Zap,
  title: 'Voice Focus Mode',
  desc: "Tell it 'Focus' to start a Pomodoro timer. Works completely offline without wake words sent to cloud."
},
{
  icon: Moon,
  title: 'Mood LEDs',
  desc: "Ambient lighting that shifts with the bot's mood or your room's vibe."
},
{
  icon: Battery,
  title: 'Rechargeable',
  desc: 'USB-C charging with 10+ days of battery life on a single charge.'
}];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, i) =>
      <div
        key={i}
        className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-teal-100 hover:bg-teal-50/30 transition-colors">

          <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-teal-600">
            <feature.icon className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {feature.desc}
          </p>
        </div>
      )}
    </div>);

}