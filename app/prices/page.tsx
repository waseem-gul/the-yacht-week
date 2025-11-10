import Hero from "@/components/Hero";
import PriceCard from "@/components/PriceCard";
import CTA from "@/components/CTA";
import content from "@/data/content.json";
import pricingData from "@/data/pricing.json";

export const metadata = {
  title: "Prices & Packages",
  description: content.prices.meta.description,
};

export default function PricesPage() {
  const prices = content.prices;

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={prices.hero.title}
        subtitle={prices.hero.subtitle}
        imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
        imageAlt="Luxury yacht pricing"
      />

      {/* Intro Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            {prices.intro.text}
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {pricingData.packages.map((pkg) => (
              <PriceCard
                key={pkg.id}
                name={pkg.name}
                price={`${pkg.currency === "EUR" ? "€" : "$"}${pkg.price}`}
                period={pkg.period}
                description={pkg.description}
                features={pkg.features}
                popular={pkg.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6">
            {prices.addOns.title}
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            {prices.addOns.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricingData.addOns.map((addOn) => (
              <div
                key={addOn.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {addOn.name}
                </h3>
                <div className="text-2xl font-bold text-primary-600 mb-3">
                  {addOn.currency === "EUR" ? "€" : "$"}
                  {addOn.price}
                </div>
                <p className="text-gray-700 text-sm">{addOn.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            {prices.transparency.text}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Book Your Adventure?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Choose your package and secure your spot for the week of a lifetime.
          </p>
          <CTA href={prices.cta.link} variant="secondary">
            {prices.cta.text}
          </CTA>
        </div>
      </section>
    </>
  );
}

