import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Instagram, Youtube, Twitter } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Shilp Sahayak
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Privacy-first electronics designed for focus and well-being. Built
              with ethics and engineering excellence in India.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors">

                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors">

                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors">

                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/product"
                  className="hover:text-teal-400 transition-colors">

                  Micro Bot
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-teal-400 transition-colors">

                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-teal-400 transition-colors">

                  Warranty & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-teal-400 transition-colors">

                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-teal-400 transition-colors">

                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/vision"
                  className="hover:text-teal-400 transition-colors">

                  Our Vision
                </Link>
              </li>
              <li>
                <Link
                  to="/vision"
                  className="hover:text-teal-400 transition-colors">

                  Privacy Manifesto
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-teal-400 transition-colors">

                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0" />
                <span>
                  Shilp Sahayak Labs
                  <br />
                  Patiala, Punjab
                  <br />
                  India 147001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                <a
                  href="mailto:hello@shilpsahayak.in"
                  className="hover:text-teal-400 transition-colors">

                  hello@shilpsahayak.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Shilp Sahayak Electronics Pvt Ltd.
            All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/vision" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link to="/support" className="hover:text-slate-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}