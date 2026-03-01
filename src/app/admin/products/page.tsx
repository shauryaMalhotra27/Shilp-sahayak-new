'use client';

import { useEffect, useState } from 'react';
import { Button } from '../../../components/ui/Button';
import { useAdminEditor } from '../../../hooks/useAdminEditor';
import { ProductStatus } from '../../../lib/admin-data';
import { deleteRemoteProduct, fetchRemoteProducts, syncProductsToRemote } from '../../../lib/admin-api';

export default function AdminProductsPage() {
  const { data, setData, persist, ready, savedAt, isSaving, error } = useAdminEditor({ section: 'products' });
  const [remoteIds, setRemoteIds] = useState<Array<number | null>>([]);
  const [remoteSyncError, setRemoteSyncError] = useState('');

  useEffect(() => {
    let active = true;
    fetchRemoteProducts().then((rows) => {
      if (!active || !rows) return;
      setRemoteIds(rows.map((r) => r.id));
      setData((prev) => ({
        ...prev,
        products: { ...prev.products, catalog: rows.map((r) => r.product) },
      }));
    });
    return () => {
      active = false;
    };
  }, [setData]);

  if (!ready) return <p className="text-muted-foreground">Loading editor...</p>;

  const catalog = data.products.catalog;

  const addProduct = () => {
    setData({
      ...data,
      products: {
        ...data.products,
        catalog: [
          ...catalog,
          {
            name: 'New Product',
            description: 'Description',
            price: '₹0',
            status: 'Coming Soon',
            imageColor: 'bg-foreground',
            accentColor: 'bg-primary',
            link: '/products/new-product'
          }
        ]
      },
      home: {
        ...data.home,
        featuredProducts: {
          ...data.home.featuredProducts,
          products: [
            ...data.home.featuredProducts.products,
            {
              name: 'New Product',
              description: 'Description',
              price: '₹0',
              status: 'Coming Soon',
              imageColor: 'bg-foreground',
              accentColor: 'bg-primary',
              link: '/products/new-product'
            }
          ]
        }
      }
    });
  };

  return (
    <div className="max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Products Editor</h1>
        <p className="text-muted-foreground">Manage catalog cards and shop filter labels.</p>
      </div>

      <section className="bg-card border border-border rounded-xl p-5 space-y-4">
        <h2 className="font-semibold text-foreground">Products Hero</h2>
        <input
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={data.products.heroTitle}
          onChange={(e) =>
            setData({
              ...data,
              products: { ...data.products, heroTitle: e.target.value }
            })
          }
          placeholder="Products page title"
        />
        <textarea
          className="w-full min-h-24 p-3 rounded-lg border border-border"
          value={data.products.heroSubtitle}
          onChange={(e) =>
            setData({
              ...data,
              products: { ...data.products, heroSubtitle: e.target.value }
            })
          }
          placeholder="Products page subtitle"
        />
      </section>

      <section className="bg-card border border-border rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-foreground">Catalog</h2>
          <Button variant="outline" size="sm" onClick={addProduct}>
            Add Product
          </Button>
        </div>
        <div className="space-y-4">
          {catalog.map((product, index) => (
            <div key={`product-row-${index}`} className="border border-border rounded-lg p-4 space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  className="w-full h-10 px-3 rounded-lg border border-border"
                  value={product.name}
                  onChange={(e) => {
                    const next = [...catalog];
                    next[index] = { ...product, name: e.target.value };
                    setData({
                      ...data,
                      products: { ...data.products, catalog: next }
                    });
                  }}
                  placeholder="Name"
                />
                <input
                  className="w-full h-10 px-3 rounded-lg border border-border"
                  value={product.price}
                  onChange={(e) => {
                    const next = [...catalog];
                    next[index] = { ...product, price: e.target.value };
                    setData({
                      ...data,
                      products: { ...data.products, catalog: next }
                    });
                  }}
                  placeholder="Price"
                />
              </div>
              <textarea
                className="w-full min-h-20 p-3 rounded-lg border border-border"
                value={product.description}
                onChange={(e) => {
                  const next = [...catalog];
                  next[index] = { ...product, description: e.target.value };
                  setData({
                    ...data,
                    products: { ...data.products, catalog: next }
                  });
                }}
                placeholder="Description"
              />
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <select
                  className="w-full h-10 px-3 rounded-lg border border-border"
                  value={product.status}
                  onChange={(e) => {
                    const next = [...catalog];
                    next[index] = { ...product, status: e.target.value as ProductStatus };
                    setData({
                      ...data,
                      products: { ...data.products, catalog: next }
                    });
                  }}
                >
                  <option>Available</option>
                  <option>Pre-Order</option>
                  <option>Coming Soon</option>
                </select>
                <input
                  className="w-full h-10 px-3 rounded-lg border border-border"
                  value={product.link}
                  onChange={(e) => {
                    const next = [...catalog];
                    next[index] = { ...product, link: e.target.value };
                    setData({
                      ...data,
                      products: { ...data.products, catalog: next }
                    });
                  }}
                  placeholder="Link"
                />
                <input
                  className="w-full h-10 px-3 rounded-lg border border-border"
                  value={product.imageColor}
                  onChange={(e) => {
                    const next = [...catalog];
                    next[index] = { ...product, imageColor: e.target.value };
                    setData({
                      ...data,
                      products: { ...data.products, catalog: next }
                    });
                  }}
                  placeholder="imageColor class"
                />
                <input
                  className="w-full h-10 px-3 rounded-lg border border-border"
                  value={product.accentColor}
                  onChange={(e) => {
                    const next = [...catalog];
                    next[index] = { ...product, accentColor: e.target.value };
                    setData({
                      ...data,
                      products: { ...data.products, catalog: next }
                    });
                  }}
                  placeholder="accentColor class"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={async () => {
                  const id = remoteIds[index];
                  if (id) {
                    const ok = await deleteRemoteProduct(id);
                    if (!ok) {
                      setRemoteSyncError('Failed to delete remote product');
                      return;
                    }
                  }
                  const next = catalog.filter((_, i) => i !== index);
                  const nextIds = remoteIds.filter((_, i) => i !== index);
                  setData({
                    ...data,
                    products: { ...data.products, catalog: next }
                  });
                  setRemoteIds(nextIds);
                  setRemoteSyncError('');
                }}
              >
                Remove Product
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card border border-border rounded-xl p-5 space-y-4">
        <h2 className="font-semibold text-foreground">Shop Filters</h2>
        <input
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={data.products.shop.title}
          onChange={(e) =>
            setData({
              ...data,
              products: {
                ...data.products,
                shop: { ...data.products.shop, title: e.target.value }
              }
            })
          }
          placeholder="Shop page title"
        />
        <input
          className="w-full h-11 px-3 rounded-lg border border-border"
          value={data.products.shop.categories.join(', ')}
          onChange={(e) =>
            setData({
              ...data,
              products: {
                ...data.products,
                shop: {
                  ...data.products.shop,
                  categories: e.target.value.split(',').map((v) => v.trim()).filter(Boolean)
                }
              }
            })
          }
          placeholder="Categories comma-separated"
        />
      </section>

      <div className="flex items-center gap-3">
        <Button
          onClick={async () => {
            const localSaved = await persist();
            if (!localSaved) return;
            const synced = await syncProductsToRemote(catalog, remoteIds);
            if (!synced.ok) {
              setRemoteSyncError(synced.error || 'Remote sync failed');
              return;
            }
            setRemoteIds(synced.ids);
            setRemoteSyncError('');
          }}
          isLoading={isSaving}
        >
          Save Products Content
        </Button>
        {savedAt && <p className="text-sm text-success">Saved at {savedAt}</p>}
        {error && <p className="text-sm text-danger">{error}</p>}
        {remoteSyncError && <p className="text-sm text-danger">{remoteSyncError}</p>}
      </div>
    </div>
  );
}
