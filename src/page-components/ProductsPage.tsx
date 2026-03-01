'use client';

import { ProductCard } from '../components/shared/ProductCard';
import { TrustBadge } from '../components/shared/TrustBadge';
import { useAdminData } from '../hooks/useAdminData';

export function ProductsPage() {
  const adminData = useAdminData();

  return (
    <div className="bg-muted min-h-screen">
      {/* Hero Section */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <div className="flex justify-center gap-3 mb-6">
            <TrustBadge type="privacy-first" />
            <TrustBadge type="offline-only" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {adminData.products.heroTitle}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {adminData.products.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adminData.products.catalog.map((product) =>
          <ProductCard key={product.name} {...product} />
          )}
        </div>
      </div>
    </div>);

}
export default ProductsPage;
