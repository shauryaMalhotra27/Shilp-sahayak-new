import { ProductGallery } from '../components/product/ProductGallery';
import { FeatureGrid } from '../components/product/FeatureGrid';
import { PrivacySection } from '../components/product/PrivacySection';
import { SpecsAccordion } from '../components/product/SpecsAccordion';
import { BuySection } from '../components/product/BuySection';
import { TrustBadge } from '../components/shared/TrustBadge';
export function ProductPage() {
  return (
    <div className="bg-card min-h-screen pb-24">
      {/* Breadcrumbs */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Home</span>
            <span>/</span>
            <span>Products</span>
            <span>/</span>
            <span className="text-foreground font-medium">Micro Bot</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Gallery & Details */}
          <div className="lg:col-span-8 space-y-16">
            <ProductGallery />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Features designed for humans
              </h2>
              <FeatureGrid />
            </div>

            <PrivacySection />

            <div className="grid md:grid-cols-2 gap-12">
              <SpecsAccordion />

              <div className="bg-muted p-6 rounded-xl border border-border h-fit">
                <h3 className="font-bold text-foreground mb-4">
                  What's in the box
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Micro Bot Unit
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    USB-C Braided Cable (1.5m)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    User Manual & Sticker Pack
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Warranty Card
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Buy Section */}
          <div className="lg:col-span-4">
            <BuySection />

            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              <TrustBadge type="made-in-india" />
              <TrustBadge type="privacy-first" />
            </div>
          </div>
        </div>
      </div>
    </div>);

}
export default ProductPage;
