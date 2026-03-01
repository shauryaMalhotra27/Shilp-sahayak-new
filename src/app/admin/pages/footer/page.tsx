'use client';

import { Button } from '../../../../components/ui/Button';
import { useAdminEditor } from '../../../../hooks/useAdminEditor';

export default function AdminFooterPageEditor() {
  const { data, setData, persist, ready, savedAt } = useAdminEditor({ section: 'footer' });
  if (!ready) return <p className="text-muted-foreground">Loading editor...</p>;
  const footer = data.footer;

  return (
    <div className="max-w-5xl space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Footer Editor</h1>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <input
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={footer.brandName}
          onChange={(e) => setData({ ...data, footer: { ...footer, brandName: e.target.value } })}
          placeholder="Brand name"
        />
        <textarea
          className="w-full min-h-20 p-3 rounded-lg border border-border"
          value={footer.brandTagline}
          onChange={(e) => setData({ ...data, footer: { ...footer, brandTagline: e.target.value } })}
          placeholder="Brand tagline"
        />
        <input
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={footer.contactEmail}
          onChange={(e) => setData({ ...data, footer: { ...footer, contactEmail: e.target.value } })}
          placeholder="Contact email"
        />
        <input
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={footer.copyrightText}
          onChange={(e) => setData({ ...data, footer: { ...footer, copyrightText: e.target.value } })}
          placeholder="Copyright text"
        />
      </section>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Legal Links</h2>
        {footer.legalLinks.map((link, i) => (
          <div key={`${link.label}-${i}`} className="grid sm:grid-cols-2 gap-2">
            <input
              className="w-full h-10 px-3 rounded-lg border border-border"
              value={link.label}
              onChange={(e) => {
                const next = [...footer.legalLinks];
                next[i] = { ...link, label: e.target.value };
                setData({ ...data, footer: { ...footer, legalLinks: next } });
              }}
              placeholder="Label"
            />
            <input
              className="w-full h-10 px-3 rounded-lg border border-border"
              value={link.href}
              onChange={(e) => {
                const next = [...footer.legalLinks];
                next[i] = { ...link, href: e.target.value };
                setData({ ...data, footer: { ...footer, legalLinks: next } });
              }}
              placeholder="Href"
            />
          </div>
        ))}
      </section>

      <div className="flex items-center gap-3">
        <Button onClick={() => persist()}>Save Footer Content</Button>
        {savedAt && <p className="text-sm text-success">Saved at {savedAt}</p>}
      </div>
    </div>
  );
}

