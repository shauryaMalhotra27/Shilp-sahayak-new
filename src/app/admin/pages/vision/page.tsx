'use client';

import { Button } from '../../../../components/ui/Button';
import { useAdminEditor } from '../../../../hooks/useAdminEditor';

export default function AdminVisionPageEditor() {
  const { data, setData, persist, ready, savedAt } = useAdminEditor({ section: 'vision' });
  if (!ready) return <p className="text-muted-foreground">Loading editor...</p>;
  const vision = data.vision;

  return (
    <div className="max-w-5xl space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Vision Page Editor</h1>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Header</h2>
        <input
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={vision.title}
          onChange={(e) => setData({ ...data, vision: { ...vision, title: e.target.value } })}
          placeholder="Title"
        />
        <textarea
          className="w-full min-h-20 p-3 rounded-lg border border-border"
          value={vision.subtitle}
          onChange={(e) => setData({ ...data, vision: { ...vision, subtitle: e.target.value } })}
          placeholder="Subtitle"
        />
      </section>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Pillars</h2>
        {vision.pillars.map((pillar, index) => (
          <div key={`${pillar.title}-${index}`} className="border border-border rounded-lg p-3 space-y-2">
            <input
              className="w-full h-10 px-3 rounded-lg border border-border"
              value={pillar.title}
              onChange={(e) => {
                const next = [...vision.pillars];
                next[index] = { ...pillar, title: e.target.value };
                setData({ ...data, vision: { ...vision, pillars: next } });
              }}
              placeholder="Pillar title"
            />
            <textarea
              className="w-full min-h-16 p-3 rounded-lg border border-border"
              value={pillar.description}
              onChange={(e) => {
                const next = [...vision.pillars];
                next[index] = { ...pillar, description: e.target.value };
                setData({ ...data, vision: { ...vision, pillars: next } });
              }}
              placeholder="Pillar description"
            />
          </div>
        ))}
      </section>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-foreground">Roadmap</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setData({
                ...data,
                vision: {
                  ...vision,
                  roadmap: [...vision.roadmap, { phase: 'New Phase', text: '', opacity: 1 }]
                }
              })
            }
          >
            Add Phase
          </Button>
        </div>
        {vision.roadmap.map((item, index) => (
          <div key={`${item.phase}-${index}`} className="border border-border rounded-lg p-3 space-y-2">
            <input
              className="w-full h-10 px-3 rounded-lg border border-border"
              value={item.phase}
              onChange={(e) => {
                const next = [...vision.roadmap];
                next[index] = { ...item, phase: e.target.value };
                setData({ ...data, vision: { ...vision, roadmap: next } });
              }}
              placeholder="Phase"
            />
            <textarea
              className="w-full min-h-16 p-3 rounded-lg border border-border"
              value={item.text}
              onChange={(e) => {
                const next = [...vision.roadmap];
                next[index] = { ...item, text: e.target.value };
                setData({ ...data, vision: { ...vision, roadmap: next } });
              }}
              placeholder="Text"
            />
            <div className="flex items-center gap-2">
              <label className="text-sm text-muted-foreground">Opacity</label>
              <input
                type="number"
                min={0}
                max={1}
                step={0.05}
                className="h-10 w-28 px-3 rounded-lg border border-border"
                value={item.opacity}
                onChange={(e) => {
                  const next = [...vision.roadmap];
                  next[index] = { ...item, opacity: Number(e.target.value) };
                  setData({ ...data, vision: { ...vision, roadmap: next } });
                }}
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  const next = vision.roadmap.filter((_, i) => i !== index);
                  setData({ ...data, vision: { ...vision, roadmap: next } });
                }}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </section>

      <div className="flex items-center gap-3">
        <Button onClick={() => persist()}>Save Vision Content</Button>
        {savedAt && <p className="text-sm text-success">Saved at {savedAt}</p>}
      </div>
    </div>
  );
}

