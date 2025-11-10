import Image from "next/image";
import CTA from "./CTA";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref = "/prices",
  ctaSecondaryText,
  ctaSecondaryHref,
  imageUrl,
  imageAlt = "Yacht Week hero image",
}: HeroProps) {
  const defaultImageUrl =
    imageUrl ||
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80";

  return (
    <section className="relative h-[70vh] min-h-[500px] lg:h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={defaultImageUrl}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/70 via-navy-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {ctaText && (
              <CTA href={ctaHref} variant="primary">
                {ctaText}
              </CTA>
            )}
            {ctaSecondaryText && (
              <CTA href={ctaSecondaryHref} variant="secondary">
                {ctaSecondaryText}
              </CTA>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

