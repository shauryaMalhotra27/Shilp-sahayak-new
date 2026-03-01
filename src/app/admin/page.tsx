export default function AdminPage() {
  return (
    <div className="max-w-6xl">
      <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
      <p className="text-muted-foreground mt-2">
        Manage page content, product catalog, and global settings from the sidebar.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Pages', value: '6 sections' },
          { title: 'Products', value: '3 products' },
          { title: 'Support FAQ', value: '5 items' },
          { title: 'Footer Links', value: '10 links' }
        ].map((stat) => (
          <div key={stat.title} className="bg-card border border-border rounded-xl p-5">
            <p className="text-sm text-muted-foreground">{stat.title}</p>
            <p className="text-xl font-semibold text-foreground mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

