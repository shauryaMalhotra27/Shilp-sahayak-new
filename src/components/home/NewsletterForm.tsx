'use client';

interface NewsletterFormProps {
  placeholder?: string;
  buttonLabel?: string;
}

export function NewsletterForm({
  placeholder = 'Enter your email',
  buttonLabel = 'Join'
}: NewsletterFormProps) {
  return (
    <form
      className="max-w-md mx-auto flex gap-3 items-stretch"
      onSubmit={(e) => e.preventDefault()}>

      <input
        type="email"
        placeholder={placeholder}
        className="flex-1 h-12 px-4 text-base rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />

      <button
        type="submit"
        className="h-12 bg-foreground text-background px-6 rounded-xl font-medium hover:bg-foreground/90 transition-colors">

        {buttonLabel}
      </button>
    </form>
  );
}
