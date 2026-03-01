'use client';

import { Button } from '../../../../components/ui/Button';
import { useAdminEditor } from '../../../../hooks/useAdminEditor';

export default function AdminAboutPageEditor() {
  const { data, setData, persist, ready, savedAt } = useAdminEditor({ section: 'about' });
  if (!ready) return <p className="text-muted-foreground">Loading editor...</p>;

  const about = data.about;

  return (
    <div className="max-w-5xl space-y-6">
      <h1 className="text-2xl font-bold text-foreground">About Page Editor</h1>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Hero</h2>
        <input
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={about.heroTitle}
          onChange={(e) => setData({ ...data, about: { ...about, heroTitle: e.target.value } })}
          placeholder="Hero title"
        />
        <input
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={about.heroSubtitle}
          onChange={(e) => setData({ ...data, about: { ...about, heroSubtitle: e.target.value } })}
          placeholder="Hero subtitle"
        />
      </section>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Story Paragraphs</h2>
        {about.storyParagraphs.map((p, i) => (
          <textarea
            key={`story-${i}`}
            className="w-full min-h-20 p-3 rounded-lg border border-border"
            value={p}
            onChange={(e) => {
              const next = [...about.storyParagraphs];
              next[i] = e.target.value;
              setData({ ...data, about: { ...about, storyParagraphs: next } });
            }}
          />
        ))}
      </section>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Timeline</h2>
        {about.timeline.map((item, index) => (
          <div key={`${item.event}-${index}`} className="border border-border rounded-lg p-3 space-y-2">
            <div className="grid sm:grid-cols-2 gap-2">
              <input
                className="w-full h-10 px-3 rounded-lg border border-border"
                value={item.year}
                onChange={(e) => {
                  const next = [...about.timeline];
                  next[index] = { ...item, year: e.target.value };
                  setData({ ...data, about: { ...about, timeline: next } });
                }}
                placeholder="Year"
              />
              <input
                className="w-full h-10 px-3 rounded-lg border border-border"
                value={item.event}
                onChange={(e) => {
                  const next = [...about.timeline];
                  next[index] = { ...item, event: e.target.value };
                  setData({ ...data, about: { ...about, timeline: next } });
                }}
                placeholder="Event"
              />
            </div>
            <textarea
              className="w-full min-h-16 p-3 rounded-lg border border-border"
              value={item.description}
              onChange={(e) => {
                const next = [...about.timeline];
                next[index] = { ...item, description: e.target.value };
                setData({ ...data, about: { ...about, timeline: next } });
              }}
              placeholder="Description"
            />
          </div>
        ))}
      </section>

      <div className="flex items-center gap-3">
        <Button onClick={() => persist()}>Save About Content</Button>
        {savedAt && <p className="text-sm text-success">Saved at {savedAt}</p>}
      </div>
    </div>
  );
}

