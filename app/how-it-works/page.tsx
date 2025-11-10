import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import content from "@/data/content.json";

export const metadata = {
  title: "How It Works",
  description: content.howItWorks.meta.description,
};

export default function HowItWorksPage() {
  const howItWorks = content.howItWorks;

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={howItWorks.hero.title}
        subtitle={howItWorks.hero.subtitle}
        imageUrl="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
        imageAlt="Yacht Week booking process"
      />

      {/* Booking Steps Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            {howItWorks.bookingSteps.title}
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {howItWorks.bookingSteps.steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-xl hover:shadow-lg transition-shadow bg-gray-50"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Week Overview Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6">
              {howItWorks.weekOverview.title}
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12">
              {howItWorks.weekOverview.description}
            </p>
            <div className="space-y-6">
              {howItWorks.weekOverview.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 font-bold">
                          {highlight.day}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-700">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available Options Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6">
            {howItWorks.options.title}
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            {howItWorks.options.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.options.items.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CTA href={howItWorks.cta.link} variant="secondary">
            {howItWorks.cta.text}
          </CTA>
        </div>
      </section>
    </>
  );
}

