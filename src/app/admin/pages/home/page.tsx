'use client';

import { Button } from '../../../../components/ui/Button';
import { useAdminEditor } from '../../../../hooks/useAdminEditor';

export default function AdminHomePageEditor() {
  const { data, setData, persist, ready, savedAt, isSaving, error } = useAdminEditor({ section: 'home' });

  if (!ready) {
    return <p className="text-muted-foreground">Loading editor...</p>;
  }

  const home = data.home;

  return (
    <div className="max-w-5xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Home Page Editor</h1>
        <p className="text-muted-foreground">Edit hero, value props, featured section and newsletter.</p>
      </div>

      <section className="bg-card border border-border rounded-xl p-5 space-y-4">
        <h2 className="font-semibold text-foreground">Hero</h2>
        <input
          aria-label="Home hero title"
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={home.hero.title}
          onChange={(e) =>
            setData({
              ...data,
              home: { ...home, hero: { ...home.hero, title: e.target.value } }
            })
          }
          placeholder="Hero title"
        />
        <input
          aria-label="Home hero highlighted title"
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={home.hero.highlightedTitle}
          onChange={(e) =>
            setData({
              ...data,
              home: { ...home, hero: { ...home.hero, highlightedTitle: e.target.value } }
            })
          }
          placeholder="Highlighted title"
        />
        <textarea
          aria-label="Home hero subtitle"
          className="w-full min-h-28 p-3 rounded-lg border border-border"
          value={home.hero.subtitle}
          onChange={(e) =>
            setData({
              ...data,
              home: { ...home, hero: { ...home.hero, subtitle: e.target.value } }
            })
          }
          placeholder="Hero subtitle"
        />
      </section>

      <section className="bg-card border border-border rounded-xl p-5 space-y-4">
        <h2 className="font-semibold text-foreground">Value Props</h2>
        <input
          aria-label="Home value props eyebrow"
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={home.valueProps.eyebrow}
          onChange={(e) =>
            setData({
              ...data,
              home: { ...home, valueProps: { ...home.valueProps, eyebrow: e.target.value } }
            })
          }
          placeholder="Section label"
        />
        <input
          aria-label="Home value props title"
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={home.valueProps.title}
          onChange={(e) =>
            setData({
              ...data,
              home: { ...home, valueProps: { ...home.valueProps, title: e.target.value } }
            })
          }
          placeholder="Section title"
        />
        <textarea
          aria-label="Home value props subtitle"
          className="w-full min-h-24 p-3 rounded-lg border border-border"
          value={home.valueProps.subtitle}
          onChange={(e) =>
            setData({
              ...data,
              home: { ...home, valueProps: { ...home.valueProps, subtitle: e.target.value } }
            })
          }
          placeholder="Section subtitle"
        />
        <div className="space-y-3">
          {home.valueProps.items.map((item, index) => (
            <div key={`home-value-prop-${index}`} className="border border-border rounded-lg p-3 space-y-2">
              <input
                className="w-full h-10 px-3 rounded-lg border border-border"
                value={item.name}
                onChange={(e) => {
                  const items = [...home.valueProps.items];
                  items[index] = { ...item, name: e.target.value };
                  setData({
                    ...data,
                    home: { ...home, valueProps: { ...home.valueProps, items } }
                  });
                }}
                placeholder="Feature name"
              />
              <textarea
                className="w-full min-h-20 p-3 rounded-lg border border-border"
                value={item.description}
                onChange={(e) => {
                  const items = [...home.valueProps.items];
                  items[index] = { ...item, description: e.target.value };
                  setData({
                    ...data,
                    home: { ...home, valueProps: { ...home.valueProps, items } }
                  });
                }}
                placeholder="Feature description"
              />
              <select
                className="w-full h-10 px-3 rounded-lg border border-border"
                value={item.icon}
                onChange={(e) => {
                  const items = [...home.valueProps.items];
                  items[index] = {
                    ...item,
                    icon: e.target.value as (typeof item)['icon']
                  };
                  setData({
                    ...data,
                    home: { ...home, valueProps: { ...home.valueProps, items } }
                  });
                }}
              >
                <option value="wifi-off">Wifi Off</option>
                <option value="shield-check">Shield Check</option>
                <option value="cpu">CPU</option>
                <option value="indian-rupee">Indian Rupee</option>
              </select>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card border border-border rounded-xl p-5 space-y-4">
        <h2 className="font-semibold text-foreground">Newsletter</h2>
        <input
          aria-label="Home newsletter title"
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={home.newsletter.title}
          onChange={(e) =>
            setData({
              ...data,
              home: { ...home, newsletter: { ...home.newsletter, title: e.target.value } }
            })
          }
          placeholder="Newsletter heading"
        />
        <textarea
          aria-label="Home newsletter subtitle"
          className="w-full min-h-20 p-3 rounded-lg border border-border"
          value={home.newsletter.subtitle}
          onChange={(e) =>
            setData({
              ...data,
              home: { ...home, newsletter: { ...home.newsletter, subtitle: e.target.value } }
            })
          }
          placeholder="Newsletter description"
        />
        <div className="grid sm:grid-cols-2 gap-3">
          <input
            className="w-full h-11 px-3 rounded-lg border border-border"
            value={home.newsletter.placeholder}
            onChange={(e) =>
              setData({
                ...data,
                home: { ...home, newsletter: { ...home.newsletter, placeholder: e.target.value } }
              })
            }
            placeholder="Input placeholder"
          />
          <input
            className="w-full h-11 px-3 rounded-lg border border-border"
            value={home.newsletter.buttonLabel}
            onChange={(e) =>
              setData({
                ...data,
                home: { ...home, newsletter: { ...home.newsletter, buttonLabel: e.target.value } }
              })
            }
            placeholder="Button label"
          />
        </div>
      </section>

      <div className="flex items-center gap-3">
        <Button onClick={() => persist()} isLoading={isSaving}>Save Home Content</Button>
        {savedAt && <p className="text-sm text-success">Saved at {savedAt}</p>}
        {error && <p className="text-sm text-danger">{error}</p>}
      </div>
    </div>
  );
}
