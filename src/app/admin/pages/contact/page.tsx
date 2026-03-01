'use client';

import { Button } from '../../../../components/ui/Button';
import { useAdminEditor } from '../../../../hooks/useAdminEditor';

export default function AdminContactPageEditor() {
  const { data, setData, persist, ready, savedAt } = useAdminEditor({ section: 'contact' });
  if (!ready) return <p className="text-muted-foreground">Loading editor...</p>;
  const contact = data.contact;

  return (
    <div className="max-w-5xl space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Contact Page Editor</h1>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <input
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={contact.title}
          onChange={(e) => setData({ ...data, contact: { ...contact, title: e.target.value } })}
          placeholder="Title"
        />
        <textarea
          className="w-full min-h-20 p-3 rounded-lg border border-border"
          value={contact.subtitle}
          onChange={(e) => setData({ ...data, contact: { ...contact, subtitle: e.target.value } })}
          placeholder="Subtitle"
        />
      </section>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Address Lines</h2>
        {contact.addressLines.map((line, i) => (
          <input
            key={`addr-${i}`}
            className="w-full h-10 px-3 rounded-lg border border-border"
            value={line}
            onChange={(e) => {
              const next = [...contact.addressLines];
              next[i] = e.target.value;
              setData({ ...data, contact: { ...contact, addressLines: next } });
            }}
          />
        ))}
      </section>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Emails</h2>
        {contact.emails.map((email, i) => (
          <input
            key={`email-${i}`}
            className="w-full h-10 px-3 rounded-lg border border-border"
            value={email}
            onChange={(e) => {
              const next = [...contact.emails];
              next[i] = e.target.value;
              setData({ ...data, contact: { ...contact, emails: next } });
            }}
          />
        ))}
      </section>

      <div className="flex items-center gap-3">
        <Button onClick={() => persist()}>Save Contact Content</Button>
        {savedAt && <p className="text-sm text-success">Saved at {savedAt}</p>}
      </div>
    </div>
  );
}

