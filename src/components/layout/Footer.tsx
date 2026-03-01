'use client';

import Link from 'next/link';
import { MapPin, Mail, Instagram, Youtube, Twitter } from 'lucide-react';
import { useAdminData } from '../../hooks/useAdminData';

const socialIconMap: Record<string, JSX.Element> = {
  instagram: <Instagram className="w-5 h-5" />,
  youtube: <Youtube className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />
};

export function Footer() {
  const adminData = useAdminData();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-background tracking-tight">
                {adminData.footer.brandName}
              </span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              {adminData.footer.brandTagline}
            </p>
            <div className="flex items-center gap-4 pt-2">
              {adminData.footer.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-background/60 hover:text-background transition-colors"
                >
                  {socialIconMap[social.label.toLowerCase()] ?? social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-background font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              {adminData.footer.shopLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-background font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {adminData.footer.companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-background font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-light shrink-0" />
                <span>
                  {adminData.footer.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-light shrink-0" />
                <a
                  href={`mailto:${adminData.footer.contactEmail}`}
                  className="hover:text-primary-light transition-colors">

                  {adminData.footer.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50">
          <p>
            &copy; {year} {adminData.footer.copyrightText}
          </p>
          <div className="flex gap-6">
            {adminData.footer.legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-background/75">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>);

}
