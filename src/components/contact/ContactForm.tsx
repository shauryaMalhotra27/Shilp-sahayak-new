'use client';

import { Button } from '../ui/Button';

export function ContactForm() {
  return (
    <div className="bg-muted p-8 rounded-2xl border border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              First Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-border focus:ring-primary focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Last Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-border focus:ring-primary focus:border-primary" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full rounded-lg border-border focus:ring-primary focus:border-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">
            Subject
          </label>
          <select className="w-full rounded-lg border-border focus:ring-primary focus:border-primary">
            <option>General Inquiry</option>
            <option>Support / Warranty</option>
            <option>Bulk Order</option>
            <option>Press / Media</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full rounded-lg border-border focus:ring-primary focus:border-primary" />
        </div>
        <Button className="w-full">Send Message</Button>
      </form>
    </div>
  );
}
