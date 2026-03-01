export function RouteLoadingSkeleton() {
  return (
    <div className="animate-pulse bg-background min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <div className="h-8 w-56 rounded bg-muted" />
        <div className="h-4 w-80 max-w-full rounded bg-muted" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          <div className="h-48 rounded-xl bg-muted" />
          <div className="h-48 rounded-xl bg-muted" />
          <div className="h-48 rounded-xl bg-muted" />
        </div>
      </div>
    </div>
  );
}
