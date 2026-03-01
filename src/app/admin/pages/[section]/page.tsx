interface AdminPageEditorProps {
  params: Promise<{ section: string }>;
}

function formatSection(section: string) {
  return section
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default async function AdminPageEditor({ params }: AdminPageEditorProps) {
  const { section } = await params;

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-foreground">{formatSection(section)} Editor</h1>
      <p className="text-muted-foreground mt-2">
        Placeholder editor for <span className="font-medium text-foreground">{section}</span>.
      </p>

      <div className="mt-6 bg-card border border-border rounded-xl p-6">
        <p className="text-sm text-muted-foreground">
          Phase 4 will add editable form fields and save actions for this section.
        </p>
      </div>
    </div>
  );
}

