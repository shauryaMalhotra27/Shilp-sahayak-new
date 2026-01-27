import React from 'react';
import { MapPin, Mail, Instagram, Youtube } from 'lucide-react';
import { Button } from '../components/ui/Button';
export function ContactPage() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-600 mb-12">
              We'd love to hear from you. Whether you have a question about our
              products, want to collaborate, or just want to say hello.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                  <p className="text-slate-600">
                    Shilp Sahayak Labs Pvt Ltd
                    <br />
                    Industrial Area, Phase 2<br />
                    Patiala, Punjab 147001
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                  <p className="text-slate-600">hello@shilpsahayak.in</p>
                  <p className="text-slate-600">support@shilpsahayak.in</p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">

                    <Instagram className="w-5 h-5 text-slate-700" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">

                    <Youtube className="w-5 h-5 text-slate-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Send a Message
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500" />

                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500" />

              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Subject
                </label>
                <select className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500">
                  <option>General Inquiry</option>
                  <option>Support / Warranty</option>
                  <option>Bulk Order</option>
                  <option>Press / Media</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border-slate-300 focus:ring-teal-500 focus:border-teal-500" />

              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>);

}