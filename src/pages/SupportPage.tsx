import React, { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';
const faqs = [
{
  q: 'Does Micro Bot record audio?',
  a: "No. While it has a microphone for sound reactivity, the audio data is processed instantly on the device's chip to trigger light animations and is immediately discarded. It is never stored or transmitted."
},
{
  q: 'Does it need internet to work?',
  a: 'No. Micro Bot is 100% offline. It does not have a Wi-Fi chip. It works right out of the box without any app or account setup.'
},
{
  q: 'How do I update the firmware?',
  a: 'Firmware updates are optional and can be done by connecting the device to your computer via USB-C. We provide a simple desktop tool for updates.'
},
{
  q: 'What is the warranty policy?',
  a: "We offer a 1-year replacement warranty for any manufacturing defects. If your bot stops working, we'll replace it for free."
},
{
  q: 'Do you ship outside India?',
  a: 'Currently, we only ship within India. We are working on international shipping for the future.'
}];

export function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Support & FAQ
        </h1>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, i) =>
          <div
            key={i}
            className="bg-white rounded-lg border border-slate-200 overflow-hidden">

              <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors">

                <span className="font-medium text-slate-900">{faq.q}</span>
                <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />

              </button>
              {openIndex === i &&
            <div className="p-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2">
                  {faq.a}
                </div>
            }
            </div>
          )}
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
          <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Still have questions?
          </h2>
          <p className="text-slate-600 mb-6">
            Our team in Patiala is happy to help you. We usually respond within
            24 hours.
          </p>
          <a href="mailto:support@shilpsahayak.in">
            <Button>Email Support</Button>
          </a>
        </div>
      </div>
    </div>);

}