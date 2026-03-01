export default function AdminOrdersPage() {
  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-bold text-foreground">Users / Orders (Mock)</h1>
      <p className="text-muted-foreground mt-2">
        This section is reserved for future user/order controls once backend integration is added.
      </p>

      <div className="mt-6 bg-card border border-border rounded-xl p-6">
        <p className="text-sm text-muted-foreground">
          No API connected yet. Current storefront order data remains localStorage-based.
        </p>
      </div>
    </div>
  );
}

