'use client';

import { MapPin, Mail, Instagram, Youtube } from 'lucide-react';
import { ContactForm } from '../components/contact/ContactForm';
import { useAdminData } from '../hooks/useAdminData';
export function ContactPage() {
  const adminData = useAdminData();
  const iconBySocial: Record<string, JSX.Element> = {
    instagram: <Instagram className="w-5 h-5 text-muted-foreground" />,
    youtube: <Youtube className="w-5 h-5 text-muted-foreground" />
  };

  return (
    <div className="bg-card min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {adminData.contact.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              {adminData.contact.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{adminData.contact.addressHeading}</h3>
                  <p className="text-muted-foreground">
                    {adminData.contact.addressLines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{adminData.contact.emailHeading}</h3>
                  {adminData.contact.emails.map((email) => (
                    <p key={email} className="text-muted-foreground">
                      {email}
                    </p>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-bold text-foreground mb-4">{adminData.contact.socialHeading}</h3>
                <div className="flex gap-4">
                  {adminData.contact.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      {iconBySocial[social.label.toLowerCase()] ?? (
                        <span className="text-xs text-muted-foreground">{social.label}</span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>);

}
export default ContactPage;
