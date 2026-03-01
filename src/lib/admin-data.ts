export type ProductStatus = 'Available' | 'Pre-Order' | 'Coming Soon';
export type TrustBadgeType = 'made-in-india' | 'privacy-first' | 'offline-only';

export interface EditableProduct {
  name: string;
  description: string;
  price: string;
  status: ProductStatus;
  imageColor: string;
  accentColor: string;
  link: string;
}

export interface AdminData {
  home: {
    hero: {
      trustBadges: TrustBadgeType[];
      title: string;
      highlightedTitle: string;
      subtitle: string;
      primaryCtaLabel: string;
      primaryCtaHref: string;
      secondaryCtaLabel: string;
      secondaryCtaHref: string;
      footnote: string;
      floatingBadgeTitle: string;
      floatingBadgeSubtitle: string;
    };
    valueProps: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: Array<{
        name: string;
        description: string;
        icon: 'wifi-off' | 'shield-check' | 'cpu' | 'indian-rupee';
      }>;
    };
    featuredProducts: {
      title: string;
      subtitle: string;
      viewAllLabel: string;
      products: EditableProduct[];
    };
    newsletter: {
      title: string;
      subtitle: string;
      placeholder: string;
      buttonLabel: string;
    };
  };
  products: {
    heroTitle: string;
    heroSubtitle: string;
    catalog: EditableProduct[];
    shop: {
      title: string;
      categories: string[];
      availability: Array<'All' | ProductStatus>;
    };
  };
  about: {
    heroTitle: string;
    heroSubtitle: string;
    locationLabel: string;
    teamLabel: string;
    storyParagraphs: string[];
    valuesTitle: string;
    valuesSubtitle: string;
    values: Array<{ title: string; description: string }>;
    journeyTitle: string;
    journeySubtitle: string;
    timeline: Array<{ year: string; event: string; description: string }>;
    founderName: string;
    founderRole: string;
    founderQuote: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaPrimaryLabel: string;
    ctaPrimaryHref: string;
    ctaSecondaryLabel: string;
    ctaSecondaryHref: string;
  };
  vision: {
    title: string;
    subtitle: string;
    pillars: Array<{ title: string; description: string }>;
    roadmapTitle: string;
    roadmap: Array<{ phase: string; text: string; opacity: number }>;
  };
  support: {
    title: string;
    faqs: Array<{ q: string; a: string }>;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaEmail: string;
    ctaLabel: string;
  };
  contact: {
    title: string;
    subtitle: string;
    addressHeading: string;
    addressLines: string[];
    emailHeading: string;
    emails: string[];
    socialHeading: string;
    socials: Array<{ label: string; href: string }>;
  };
  footer: {
    brandName: string;
    brandTagline: string;
    shopLinks: Array<{ label: string; href: string }>;
    companyLinks: Array<{ label: string; href: string }>;
    addressLines: string[];
    contactEmail: string;
    socialLinks: Array<{ label: string; href: string }>;
    legalLinks: Array<{ label: string; href: string }>;
    copyrightText: string;
  };
  global: {
    trustBadges: Record<
      TrustBadgeType,
      {
        text: string;
      }
    >;
    checkout: {
      secureCheckoutLabel: string;
    };
    account: {
      emptyAddressesText: string;
      privacyNoticeTitle: string;
      privacyNoticeBody: string;
    };
  };
}

const productCatalog: EditableProduct[] = [
  {
    name: 'Micro Bot',
    description:
      'Your offline desk companion for focus and well-being. Features expressive OLED face and mood tracking.',
    price: '₹2,999',
    status: 'Available',
    imageColor: 'bg-foreground',
    accentColor: 'bg-info',
    link: '/products/micro-bot'
  },
  {
    name: 'Pomodoro Device',
    description:
      'Dedicated offline focus timer with physical controls. No app needed, just pure productivity.',
    price: '₹1,499',
    status: 'Pre-Order',
    imageColor: 'bg-foreground/90',
    accentColor: 'bg-warning',
    link: '/products/pomodoro'
  },
  {
    name: 'Shilp Drone',
    description:
      'Consumer/educational drone with local controller. Learn to fly with safety and privacy.',
    price: '₹12,999',
    status: 'Coming Soon',
    imageColor: 'bg-foreground/80',
    accentColor: 'bg-primary',
    link: '/products/drone'
  }
];

export const defaultStaticData: AdminData = {
  home: {
    hero: {
      trustBadges: ['privacy-first', 'offline-only'],
      title: 'Privacy-first electronics.',
      highlightedTitle: 'Built to work offline.',
      subtitle:
        'Meet Micro Bot — your intelligent, offline desktop companion. Designed for focus and productivity without the surveillance.',
      primaryCtaLabel: 'View Micro Bot',
      primaryCtaHref: '/products/micro-bot',
      secondaryCtaLabel: 'Our Vision',
      secondaryCtaHref: '/vision',
      footnote: 'No Wi-Fi required. No data collection.',
      floatingBadgeTitle: 'Made in India',
      floatingBadgeSubtitle: 'Engineered & Assembled in Patiala, Punjab'
    },
    valueProps: {
      eyebrow: 'Why Shilp Sahayak?',
      title: 'Technology that respects you',
      subtitle:
        "We're building a future where smart devices don't spy on you. Simple, ethical, and powerful tools for your daily life.",
      items: [
        {
          name: '100% Offline',
          description:
            'No Wi-Fi, no cloud, no servers. Your device works perfectly without an internet connection.',
          icon: 'wifi-off'
        },
        {
          name: 'No Data Collection',
          description:
            'We believe your data belongs to you. We literally cannot see, store, or sell your information.',
          icon: 'shield-check'
        },
        {
          name: 'Made in India',
          description:
            'Designed, engineered, and manufactured locally in Patiala. Supporting Indian innovation.',
          icon: 'cpu'
        },
        {
          name: 'Affordable',
          description:
            "Premium technology at accessible prices. High-quality electronics shouldn't cost a fortune.",
          icon: 'indian-rupee'
        }
      ]
    },
    featuredProducts: {
      title: 'Our Product Line',
      subtitle:
        'Tools designed for focus, learning, and privacy. Built to work offline.',
      viewAllLabel: 'View All Products',
      products: productCatalog
    },
    newsletter: {
      title: 'Join the Offline Movement',
      subtitle:
        "We're building a community of people who value focus, privacy, and ethical technology. Sign up for updates on new products and firmware features.",
      placeholder: 'Enter your email',
      buttonLabel: 'Join'
    }
  },
  products: {
    heroTitle: 'Privacy-first electronics for every need',
    heroSubtitle:
      'From desk companions to educational tools, all our products are built with the same philosophy: Local processing, no data collection, and engineering excellence.',
    catalog: productCatalog,
    shop: {
      title: 'Shop All Products',
      categories: ['All', 'Focus Tools', 'Drones'],
      availability: ['All', 'Available', 'Pre-Order', 'Coming Soon']
    }
  },
  about: {
    heroTitle: 'Engineering with a Conscience',
    heroSubtitle: 'Why does every smart device need to spy on us?',
    locationLabel: 'Patiala, Punjab',
    teamLabel: 'Small Team, Big Mission',
    storyParagraphs: [
      `We are a small team of engineers, designers, and privacy advocates based in Patiala, Punjab. In a world where "smart" usually means "connected to the cloud," we're taking a different path.`,
      'Modern electronics have become surveillance tools. Your vacuum cleaner maps your home, your speaker listens to your conversations, and your thermostat sells your usage data. We believe technology should serve you, not track you.',
      "That's why we build Local-First IoT. Our devices are powerful, intelligent, and helpful—but they don't talk to the internet. All processing happens on the chip inside the device."
    ],
    valuesTitle: 'What We Stand For',
    valuesSubtitle:
      "Our values aren't just words on a page—they're the foundation of every product we build.",
    values: [
      {
        title: 'Privacy First',
        description:
          'No cloud, no tracking, no data collection. Your devices work for you, not advertisers.'
      },
      {
        title: 'Engineering Excellence',
        description:
          'Built by engineers who care about craft, reliability, and doing things right.'
      },
      {
        title: 'Made in India',
        description:
          'Designed, engineered, and assembled in Patiala, Punjab. Supporting local innovation.'
      },
      {
        title: 'Human-Centric',
        description:
          'Technology should enhance life, not exploit it. We build tools that respect you.'
      }
    ],
    journeyTitle: 'Our Journey',
    journeySubtitle:
      'Building the future of ethical electronics, one step at a time.',
    timeline: [
      {
        year: '2023',
        event: 'Founded in Patiala',
        description: 'Started with a vision for ethical electronics'
      },
      {
        year: '2024',
        event: 'Micro Bot Launch',
        description: 'First offline-first companion device'
      },
      {
        year: '2024',
        event: 'Product Line Expansion',
        description: 'Pomodoro Device and Drone in development'
      },
      {
        year: '2025',
        event: 'Growing Community',
        description: 'Building a movement for privacy-first tech'
      }
    ],
    founderName: 'Ratanabh Sharma',
    founderRole: 'Founder & Lead Engineer',
    founderQuote:
      `"We're not just selling gadgets. We're proving that you can build profitable, useful technology without exploiting user data. Shilp Sahayak is our contribution to a more ethical internet of things."`,
    ctaTitle: 'Join the Movement',
    ctaSubtitle:
      "We're building a future where smart devices respect your privacy. Explore our products and be part of the change.",
    ctaPrimaryLabel: 'Explore Products',
    ctaPrimaryHref: '/products',
    ctaSecondaryLabel: 'Read Our Vision',
    ctaSecondaryHref: '/vision'
  },
  vision: {
    title: 'The Offline Manifesto',
    subtitle: 'If a product can work offline, it should.',
    pillars: [
      {
        title: 'Privacy is a Human Right',
        description:
          "Privacy isn't a toggle in settings. It's a fundamental design requirement. We design hardware that physically cannot violate your privacy."
      },
      {
        title: 'Local Processing',
        description:
          'Cloud computing has its place, but not in your bedroom. With modern chips, we can run AI and logic locally on the device.'
      },
      {
        title: 'Open & Transparent',
        description:
          'We believe in the right to repair and the right to know what your hardware is doing. Our long-term goal is to open-source our firmware.'
      }
    ],
    roadmapTitle: 'Our Roadmap',
    roadmap: [
      {
        phase: 'Phase 1',
        text: 'Launch Micro Bot - Demonstrate viable offline AI companion.',
        opacity: 1
      },
      {
        phase: 'Phase 2',
        text: 'Expand to Home Automation - Offline smart plugs and sensors.',
        opacity: 0.75
      },
      {
        phase: 'Phase 3',
        text: 'Open Source Hardware Platform for ethical IoT.',
        opacity: 0.5
      }
    ]
  },
  support: {
    title: 'Support & FAQ',
    faqs: [
      {
        q: 'Does Micro Bot record audio?',
        a: "No. While it has a microphone for sound reactivity, the audio data is processed instantly on the device's chip to trigger light animations and is immediately discarded. It is never stored or transmitted."
      },
      {
        q: 'Does it need internet to work?',
        a: 'No. Micro Bot is 100% offline. It does not have a Wi-Fi chip. It works right out of the box without any app or account setup.'
      },
      {
        q: 'How do I update the firmware?',
        a: 'Firmware updates are optional and can be done by connecting the device to your computer via USB-C. We provide a simple desktop tool for updates.'
      },
      {
        q: 'What is the warranty policy?',
        a: "We offer a 1-year replacement warranty for any manufacturing defects. If your bot stops working, we'll replace it for free."
      },
      {
        q: 'Do you ship outside India?',
        a: 'Currently, we only ship within India. We are working on international shipping for the future.'
      }
    ],
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      'Our team in Patiala is happy to help you. We usually respond within 24 hours.',
    ctaEmail: 'support@shilpsahayak.in',
    ctaLabel: 'Email Support'
  },
  contact: {
    title: 'Get in Touch',
    subtitle:
      "We'd love to hear from you. Whether you have a question about our products, want to collaborate, or just want to say hello.",
    addressHeading: 'Visit Us',
    addressLines: [
      'Shilp Sahayak Labs Pvt Ltd',
      'Industrial Area, Phase 2',
      'Patiala, Punjab 147001',
      'India'
    ],
    emailHeading: 'Email Us',
    emails: ['hello@shilpsahayak.in', 'support@shilpsahayak.in'],
    socialHeading: 'Follow Us',
    socials: [
      { label: 'Instagram', href: '#' },
      { label: 'YouTube', href: '#' }
    ]
  },
  footer: {
    brandName: 'Shilp Sahayak',
    brandTagline:
      'Privacy-first electronics designed for focus and well-being. Built with ethics and engineering excellence in India.',
    shopLinks: [
      { label: 'Micro Bot', href: '/products/micro-bot' },
      { label: 'All Products', href: '/shop' },
      { label: 'Warranty & Returns', href: '/support' },
      { label: 'Shipping Policy', href: '/support' }
    ],
    companyLinks: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Vision', href: '/vision' },
      { label: 'Privacy Manifesto', href: '/vision' },
      { label: 'Contact', href: '/contact' }
    ],
    addressLines: ['Shilp Sahayak Labs', 'Patiala, Punjab', 'India 147001'],
    contactEmail: 'hello@shilpsahayak.in',
    socialLinks: [
      { label: 'Instagram', href: '#' },
      { label: 'Youtube', href: '#' },
      { label: 'Twitter', href: '#' }
    ],
    legalLinks: [
      { label: 'Privacy Policy', href: '/vision' },
      { label: 'Terms of Service', href: '/support' }
    ],
    copyrightText:
      'Shilp Sahayak Electronics Pvt Ltd. All rights reserved.'
  },
  global: {
    trustBadges: {
      'made-in-india': { text: 'Made in India' },
      'privacy-first': { text: 'Privacy First' },
      'offline-only': { text: '100% Offline' }
    },
    checkout: {
      secureCheckoutLabel: 'Secure Checkout'
    },
    account: {
      emptyAddressesText: 'No saved addresses.',
      privacyNoticeTitle: 'Privacy Notice',
      privacyNoticeBody:
        'Your data is stored securely and used only for orders and support. We do not track your behavior or sell your data.'
    }
  }
};

const ADMIN_DATA_KEY = 'adminData';

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function deepMerge<T>(base: T, override: unknown): T {
  if (!isRecord(base) || !isRecord(override)) return (override as T) ?? base;
  const result: Record<string, unknown> = { ...base };
  Object.keys(override).forEach((key) => {
    const baseValue = (base as Record<string, unknown>)[key];
    const overrideValue = (override as Record<string, unknown>)[key];
    if (Array.isArray(baseValue) && Array.isArray(overrideValue)) {
      result[key] = overrideValue;
      return;
    }
    if (isRecord(baseValue) && isRecord(overrideValue)) {
      result[key] = deepMerge(baseValue, overrideValue);
      return;
    }
    result[key] = overrideValue;
  });
  return result as T;
}

export function loadAdminData(): AdminData {
  if (typeof window === 'undefined') return defaultStaticData;
  try {
    const raw = window.localStorage.getItem(ADMIN_DATA_KEY);
    if (!raw) return defaultStaticData;
    const parsed = JSON.parse(raw);
    return deepMerge(defaultStaticData, parsed);
  } catch {
    return defaultStaticData;
  }
}

export function saveAdminData(newData: AdminData): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(ADMIN_DATA_KEY, JSON.stringify(newData));
}
