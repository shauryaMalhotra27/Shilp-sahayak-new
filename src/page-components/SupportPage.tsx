import { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useAdminData } from '../hooks/useAdminData';

export function SupportPage() {
  const adminData = useAdminData();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="bg-muted min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-8 text-center">
          {adminData.support.title}
        </h1>

        <div className="space-y-4 mb-16">
          {adminData.support.faqs.map((faq, i) =>
          <div
            key={i}
            className="bg-card rounded-lg border border-border overflow-hidden">

              <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-muted transition-colors">

                <span className="font-medium text-foreground">{faq.q}</span>
                <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />

              </button>
              {openIndex === i &&
            <div className="p-4 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-border mt-2">
                  {faq.a}
                </div>
            }
            </div>
          )}
        </div>

        <div className="bg-card p-8 rounded-2xl border border-border text-center">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">
            {adminData.support.ctaTitle}
          </h2>
          <p className="text-muted-foreground mb-6">
            {adminData.support.ctaSubtitle}
          </p>
          <a href={`mailto:${adminData.support.ctaEmail}`}>
            <Button>{adminData.support.ctaLabel}</Button>
          </a>
        </div>
      </div>
    </div>);

}
export default SupportPage;
