import { AdminData } from './admin-data';

export type AdminSectionKey =
  | 'home'
  | 'products'
  | 'about'
  | 'vision'
  | 'support'
  | 'contact'
  | 'footer'
  | 'global';

export interface ValidationError {
  field: string;
  message: string;
}

function required(value: string, field: string, errors: ValidationError[]) {
  if (!value.trim()) {
    errors.push({ field, message: `${field} is required` });
  }
}

export function validateAdminSection(
  section: AdminSectionKey,
  data: AdminData
): ValidationError[] {
  const errors: ValidationError[] = [];

  if (section === 'home') {
    required(data.home.hero.title, 'home.hero.title', errors);
    required(data.home.hero.highlightedTitle, 'home.hero.highlightedTitle', errors);
    required(data.home.hero.subtitle, 'home.hero.subtitle', errors);
    required(data.home.newsletter.title, 'home.newsletter.title', errors);
    data.home.valueProps.items.forEach((item, idx) => {
      required(item.name, `home.valueProps.items[${idx}].name`, errors);
      required(item.description, `home.valueProps.items[${idx}].description`, errors);
    });
  }

  if (section === 'products') {
    required(data.products.heroTitle, 'products.heroTitle', errors);
    data.products.catalog.forEach((item, idx) => {
      required(item.name, `products.catalog[${idx}].name`, errors);
      required(item.price, `products.catalog[${idx}].price`, errors);
      required(item.link, `products.catalog[${idx}].link`, errors);
    });
  }

  if (section === 'about') {
    required(data.about.heroTitle, 'about.heroTitle', errors);
    required(data.about.heroSubtitle, 'about.heroSubtitle', errors);
    required(data.about.founderName, 'about.founderName', errors);
  }

  if (section === 'vision') {
    required(data.vision.title, 'vision.title', errors);
    data.vision.pillars.forEach((item, idx) => {
      required(item.title, `vision.pillars[${idx}].title`, errors);
      required(item.description, `vision.pillars[${idx}].description`, errors);
    });
  }

  if (section === 'support') {
    required(data.support.title, 'support.title', errors);
    required(data.support.ctaEmail, 'support.ctaEmail', errors);
    data.support.faqs.forEach((item, idx) => {
      required(item.q, `support.faqs[${idx}].q`, errors);
      required(item.a, `support.faqs[${idx}].a`, errors);
    });
  }

  if (section === 'contact') {
    required(data.contact.title, 'contact.title', errors);
    data.contact.emails.forEach((email, idx) => {
      required(email, `contact.emails[${idx}]`, errors);
    });
  }

  if (section === 'footer') {
    required(data.footer.brandName, 'footer.brandName', errors);
    required(data.footer.contactEmail, 'footer.contactEmail', errors);
  }

  if (section === 'global') {
    required(
      data.global.checkout.secureCheckoutLabel,
      'global.checkout.secureCheckoutLabel',
      errors
    );
    required(
      data.global.trustBadges['privacy-first'].text,
      'global.trustBadges.privacy-first.text',
      errors
    );
  }

  return errors;
}

export function firstValidationMessage(errors: ValidationError[]): string | null {
  return errors.length ? errors[0].message : null;
}

