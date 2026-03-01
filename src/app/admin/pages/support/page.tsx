'use client';

import { Button } from '../../../../components/ui/Button';
import { useAdminEditor } from '../../../../hooks/useAdminEditor';

export default function AdminSupportPageEditor() {
  const { data, setData, persist, ready, savedAt } = useAdminEditor({ section: 'support' });
  if (!ready) return <p className="text-muted-foreground">Loading editor...</p>;
  const support = data.support;

  return (
    <div className="max-w-5xl space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Support Page Editor</h1>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <input
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={support.title}
          onChange={(e) => setData({ ...data, support: { ...support, title: e.target.value } })}
          placeholder="Page title"
        />
      </section>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-foreground">FAQ Items</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setData({
                ...data,
                support: {
                  ...support,
                  faqs: [...support.faqs, { q: 'New question?', a: 'New answer.' }]
                }
              })
            }
          >
            Add FAQ
          </Button>
        </div>

        {support.faqs.map((faq, index) => (
          <div key={`${faq.q}-${index}`} className="border border-border rounded-lg p-3 space-y-2">
            <input
              className="w-full h-10 px-3 rounded-lg border border-border"
              value={faq.q}
              onChange={(e) => {
                const next = [...support.faqs];
                next[index] = { ...faq, q: e.target.value };
                setData({ ...data, support: { ...support, faqs: next } });
              }}
              placeholder="Question"
            />
            <textarea
              className="w-full min-h-16 p-3 rounded-lg border border-border"
              value={faq.a}
              onChange={(e) => {
                const next = [...support.faqs];
                next[index] = { ...faq, a: e.target.value };
                setData({ ...data, support: { ...support, faqs: next } });
              }}
              placeholder="Answer"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const next = support.faqs.filter((_, i) => i !== index);
                setData({ ...data, support: { ...support, faqs: next } });
              }}
            >
              Remove FAQ
            </Button>
          </div>
        ))}
      </section>

      <div className="flex items-center gap-3">
        <Button onClick={() => persist()}>Save Support Content</Button>
        {savedAt && <p className="text-sm text-success">Saved at {savedAt}</p>}
      </div>
    </div>
  );
}

