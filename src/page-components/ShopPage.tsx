import { useMemo, useState } from 'react';
import { ProductCard } from '../components/shared/ProductCard';
import { Filter } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import { useWorkerProducts } from '../hooks/useWorkerProducts';

export function ShopPage() {
  const adminData = useAdminData();
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const { products: liveProducts, isLoading } = useWorkerProducts(adminData.products.catalog);
  const products = liveProducts.map((product) => ({
    ...product,
    category:
      product.link.includes('drone') || product.name.toLowerCase().includes('drone')
        ? 'Drones'
        : 'Focus Tools'
  }));
  const filteredProducts = useMemo(
    () =>
    products.filter((product) => {
      const categoryMatch =
      categoryFilter === 'All' || product.category === categoryFilter;
      const statusMatch =
      statusFilter === 'All' || product.status === statusFilter;
      return categoryMatch && statusMatch;
    }),
    [categoryFilter, statusFilter]
  );
  return (
    <div className="bg-muted min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">{adminData.products.shop.title}</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-card p-6 rounded-xl border border-border sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-foreground font-bold">
                <Filter className="w-4 h-4" />
                Filters
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Category
                  </h3>
                  <div className="space-y-2">
                    {adminData.products.shop.categories.map((cat) =>
                    <label
                      key={cat}
                      className="flex items-center gap-2 cursor-pointer">

                        <input
                        type="radio"
                        name="category"
                        checked={categoryFilter === cat}
                        onChange={() => setCategoryFilter(cat)}
                        className="text-primary focus:ring-primary" />

                        <span className="text-sm text-muted-foreground">{cat}</span>
                      </label>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Availability
                  </h3>
                  <div className="space-y-2">
                    {adminData.products.shop.availability.map(
                      (status) =>
                      <label
                        key={status}
                        className="flex items-center gap-2 cursor-pointer">

                          <input
                          type="radio"
                          name="status"
                          checked={statusFilter === status}
                          onChange={() => setStatusFilter(status)}
                          className="text-primary focus:ring-primary" />

                          <span className="text-sm text-muted-foreground">
                            {status}
                          </span>
                        </label>

                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {isLoading &&
            <p className="text-sm text-muted-foreground mb-4">Loading latest products...</p>
            }
            <div className="grid md:grid-cols-2 gap-6">
              {filteredProducts.map((product) =>
              <ProductCard key={product.name} {...product} />
              )}
            </div>

            {filteredProducts.length === 0 &&
            <div className="text-center py-12 bg-card rounded-xl border border-border border-dashed">
                <p className="text-muted-foreground">
                  No products match your filters.
                </p>
                <button
                onClick={() => {
                  setCategoryFilter('All');
                  setStatusFilter('All');
                }}
                className="text-primary font-medium mt-2 hover:underline">

                  Clear all filters
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>);

}
export default ShopPage;
