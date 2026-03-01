'use client';

import { Button } from '../../../components/ui/Button';
import { useAdminEditor } from '../../../hooks/useAdminEditor';
import { defaultStaticData } from '../../../lib/admin-data';

export default function AdminGlobalPage() {
  const { data, setData, persist, ready, savedAt, isSaving, error } = useAdminEditor({ section: 'global' });
  if (!ready) return <p className="text-muted-foreground">Loading editor...</p>;

  const global = data.global;

  return (
    <div className="max-w-5xl space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Global Settings</h1>
      <p className="text-muted-foreground">
        Manage shared labels used across multiple pages.
      </p>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Trust Badges</h2>
        {(['made-in-india', 'privacy-first', 'offline-only'] as const).map((key) => (
          <div key={key} className="grid sm:grid-cols-2 gap-3 items-center">
            <label className="text-sm text-muted-foreground">{key}</label>
            <input
              className="w-full h-10 px-3 rounded-lg border border-border"
              value={global.trustBadges[key].text}
              onChange={(e) =>
                setData({
                  ...data,
                  global: {
                    ...global,
                    trustBadges: {
                      ...global.trustBadges,
                      [key]: { text: e.target.value }
                    }
                  }
                })
              }
            />
          </div>
        ))}
      </section>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Checkout</h2>
        <input
          className="w-full h-10 px-3 rounded-lg border border-border"
          value={global.checkout.secureCheckoutLabel}
          onChange={(e) =>
            setData({
              ...data,
              global: {
                ...global,
                checkout: { ...global.checkout, secureCheckoutLabel: e.target.value }
              }
            })
          }
          placeholder="Secure checkout label"
        />
      </section>

      <section className="bg-card border border-border rounded-xl p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Account</h2>
        <input
          className="w-full h-10 px-3 rounded-lg border border-border"
          value={global.account.emptyAddressesText}
          onChange={(e) =>
            setData({
              ...data,
              global: {
                ...global,
                account: { ...global.account, emptyAddressesText: e.target.value }
              }
            })
          }
          placeholder="Empty addresses text"
        />
        <input
          className="w-full h-10 px-3 rounded-lg border border-border"
          value={global.account.privacyNoticeTitle}
          onChange={(e) =>
            setData({
              ...data,
              global: {
                ...global,
                account: { ...global.account, privacyNoticeTitle: e.target.value }
              }
            })
          }
          placeholder="Privacy notice title"
        />
        <textarea
          className="w-full min-h-20 p-3 rounded-lg border border-border"
          value={global.account.privacyNoticeBody}
          onChange={(e) =>
            setData({
              ...data,
              global: {
                ...global,
                account: { ...global.account, privacyNoticeBody: e.target.value }
              }
            })
          }
          placeholder="Privacy notice body"
        />
      </section>

      <div className="flex items-center gap-3">
        <Button
          onClick={() => persist(undefined, { validate: (payload) => (!payload.global.checkout.secureCheckoutLabel.trim() ? 'Secure checkout label is required' : null) })}
          isLoading={isSaving}
        >
          Save Global Content
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setData(defaultStaticData);
            persist(defaultStaticData);
          }}
        >
          Reset All to Defaults
        </Button>
        {savedAt && <p className="text-sm text-success">Saved at {savedAt}</p>}
        {error && <p className="text-sm text-danger">{error}</p>}
      </div>
    </div>
  );
}
