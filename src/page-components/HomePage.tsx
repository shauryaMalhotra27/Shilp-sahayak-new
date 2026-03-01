'use client';

import { HeroSection } from '../components/home/HeroSection';
import { ValuePropsSection } from '../components/home/ValuePropsSection';
import { FeaturedProduct } from '../components/home/FeaturedProduct';
import { NewsletterForm } from '../components/home/NewsletterForm';
import { useAdminData } from '../hooks/useAdminData';
export function HomePage() {
  const adminData = useAdminData();

  return (
    <div className="min-h-screen">
      <HeroSection content={adminData.home.hero} />
      <ValuePropsSection content={adminData.home.valueProps} />
      <FeaturedProduct content={adminData.home.featuredProducts} />

      {/* Newsletter / Community Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {adminData.home.newsletter.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {adminData.home.newsletter.subtitle}
          </p>
          <NewsletterForm
            placeholder={adminData.home.newsletter.placeholder}
            buttonLabel={adminData.home.newsletter.buttonLabel}
          />
        </div>
      </section>
    </div>);

}
export default HomePage;
