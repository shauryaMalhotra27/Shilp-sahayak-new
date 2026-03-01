import { ProductCard } from '../shared/ProductCard';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { AdminData } from '../../lib/admin-data';

interface FeaturedProductProps {
  content: AdminData['home']['featuredProducts'];
  products?: AdminData['home']['featuredProducts']['products'];
}

export function FeaturedProduct({ content, products }: FeaturedProductProps) {
  const list = products ?? content.products;
  return (
    <section className="bg-muted py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {content.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {content.subtitle}
            </p>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center text-primary font-medium hover:text-primary-dark">

            {content.viewAllLabel} <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((product) =>
          <ProductCard key={product.name} {...product} />
          )}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center text-primary font-medium hover:text-primary-dark">

            {content.viewAllLabel} <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>);

}
