'use client';

import Link from 'next/link';
import { useDeferredValue, useMemo, useState } from 'react';

const pageSections = [
  { name: 'Home', description: 'Hero, value props, featured products, newsletter', href: '/admin/pages/home' },
  { name: 'About', description: 'Story, values, timeline, founder, CTA', href: '/admin/pages/about' },
  { name: 'Vision', description: 'Manifesto pillars and roadmap phases', href: '/admin/pages/vision' },
  { name: 'Support', description: 'FAQ and support CTA content', href: '/admin/pages/support' },
  { name: 'Contact', description: 'Address, emails, socials and headings', href: '/admin/pages/contact' },
  { name: 'Footer', description: 'Brand copy, links, legal, socials', href: '/admin/pages/footer' }
];

export default function AdminPagesPage() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const filtered = useMemo(
    () =>
      pageSections.filter(
        (s) =>
          s.name.toLowerCase().includes(deferredQuery.toLowerCase()) ||
          s.description.toLowerCase().includes(deferredQuery.toLowerCase())
      ),
    [deferredQuery]
  );

  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-bold text-foreground">Pages</h1>
      <p className="text-muted-foreground mt-2">
        Choose a page section to edit content.
      </p>
      <input
        aria-label="Search page editors"
        className="mt-4 w-full h-11 px-3 rounded-lg border border-border bg-card"
        placeholder="Search editors..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {filtered.map((section) => (
          <div key={section.name} className="bg-card border border-border rounded-xl p-5">
            <h2 className="font-semibold text-foreground">{section.name}</h2>
            <p className="text-sm text-muted-foreground mt-1">{section.description}</p>
            <Link
              href={section.href}
              className="inline-block mt-3 text-sm text-primary hover:text-primary-dark"
            >
              Open Editor
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
