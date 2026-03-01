import { memo } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';

export interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  status: 'Available' | 'Pre-Order' | 'Coming Soon';
  imageColor: string;     // e.g. "bg-foreground" or "bg-foreground/90"
  accentColor: string;    // e.g. "bg-primary" or "bg-info"
  link: string;
  image?: string;         // optional real product image (fallback to abstract)
}

function ProductCardComponent({
  name,
  description,
  price,
  status,
  imageColor,
  accentColor,
  link,
  image,
}: ProductCardProps) {
  const statusConfig = {
    Available: {
      bg: 'bg-available/10',
      text: 'text-available',
      border: 'border-available/20',
      label: 'Available Now',
    },
    'Pre-Order': {
      bg: 'bg-preorder/10',
      text: 'text-preorder',
      border: 'border-preorder/20',
      label: 'Pre-Order',
    },
    'Coming Soon': {
      bg: 'bg-coming-soon/10',
      text: 'text-coming-soon',
      border: 'border-coming-soon/20',
      label: 'Coming Soon',
    },
  };

  const config = statusConfig[status];

  return (
    <Card
      noPadding
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm',
        'backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1',
        status === 'Coming Soon' && 'opacity-85 hover:opacity-100'
      )}
    >
      {/* Visual header */}
      <div
        className={cn(
          'relative aspect-[4/3] overflow-hidden',
          imageColor || 'bg-gradient-to-br from-muted to-background'
        )}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          // Abstract fallback
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={cn(
                'relative h-28 w-28 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl',
                'transition-all duration-500 group-hover:scale-110 group-hover:rotate-3'
              )}
            >
              <div
                className={cn(
                  'absolute inset-0 m-auto h-16 w-24 rounded-full blur-2xl opacity-70',
                  accentColor
                )}
              />
            </div>
          </div>
        )}

        {/* Status badge */}
        <div className="absolute right-4 top-4 z-10">
          <span
            className={cn(
              'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold',
              config.bg,
              config.text,
              config.border
            )}
          >
            {config.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 ">
        <div className="flex flex-col gap-3">
          <h3 className="line-clamp-2 text-xl font-semibold tracking-tight text-foreground group-hover:text-primary-dark">
            {name}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mt-auto pt-6 flex items-center justify-between border-t border-border">
          <span className="text-2xl font-bold text-foreground">{price}</span>

          <Link href={link} prefetch={status !== 'Coming Soon'}>
            <Button
              size="sm"
              variant={status === 'Coming Soon' ? 'secondary' : 'primary'}
              className={cn(
                'gap-1.5 transition-all group-hover:gap-2',
                status === 'Coming Soon' && 'opacity-80 hover:opacity-100'
              )}
              disabled={status === 'Coming Soon'} // optional: disable interaction
              aria-label={`View details for ${name}`}
            >
              {status === 'Coming Soon' ? 'Join Waitlist' : 'View Details'}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export const ProductCard = memo(ProductCardComponent);
