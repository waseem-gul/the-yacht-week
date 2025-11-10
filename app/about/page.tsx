import Image from "next/image";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import content from "@/data/content.json";

export const metadata = {
  title: "About Us",
  description: content.about.meta.description,
};

export default function AboutPage() {
  const about = content.about;

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={about.hero.title}
        subtitle={about.hero.subtitle}
        imageUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80"
        imageAlt="Yacht Week sailing adventure"
      />

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {about.story.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              {about.story.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {about.mission.title}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {about.mission.content}
            </p>
          </div>
        </div>
      </section>

      {/* Vibe Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {about.vibe.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {about.vibe.content}
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80"
                alt={about.vibe.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-16 lg:py-24 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
            {about.keyFacts.title}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {about.keyFacts.facts.map((fact, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  {fact.number}
                </div>
                <div className="text-xl text-primary-100">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CTA href={about.cta.link} variant="primary">
            {about.cta.text}
          </CTA>
        </div>
      </section>
    </>
  );
}

