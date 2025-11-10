import Image from "next/image";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import QuoteCarousel from "@/components/QuoteCarousel";
import pricingData from "@/data/pricing.json";
import content from "@/data/content.json";

export const metadata = {
    title: "Home",
    description: content.home.hero.subtitle,
};

export default function HomePage() {
    const home = content.home;

    return (
        <>
            {/* Hero Section */}
            <Hero
                title={home.hero.title}
                subtitle={home.hero.subtitle}
                ctaText={home.hero.cta}
                ctaHref="/prices"
                ctaSecondaryText={home.hero.ctaSecondary}
                ctaSecondaryHref="/how-it-works"
                imageUrl="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
                imageAlt="Yacht sailing on crystal clear waters"
            />

            {/* Selling Points Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
                        {home.sellingPoints.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {home.sellingPoints.points.map((point, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
                            >
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-primary-600"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {point.title}
                                </h3>
                                <p className="text-gray-600">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Section */}
            <section className="relative h-[400px] lg:h-[500px]">
                <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
                    alt="Yacht Week guests enjoying sunset"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-navy-900/40" />
                {/* Booking overlay on image */}
                <div className="absolute inset-0 z-10 flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-4 lg:mb-6">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white text-center">
                                Set sail on the best week of your life
                            </h2>
                            <p className="text-primary-100 max-w-3xl mx-auto text-center mt-3">
                                Discover legendary routes, curated events, and a global community at sea.
                                Choose your destination and dates to explore routes, prices, and availability—all in one place.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 lg:p-8">
                            <form action="/prices" method="get">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-end">
                                    <div className="md:col-span-5">
                                        <label
                                            htmlFor="destination"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Where?
                                        </label>
                                        <div className="relative">
                                            <span
                                                className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-primary-600"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                                                    <path d="M12 22s7-4.686 7-11a7 7 0 10-14 0c0 6.314 7 11 7 11z" />
                                                </svg>
                                            </span>
                                            <input
                                                id="destination"
                                                name="destination"
                                                type="text"
                                                placeholder="e.g., Croatia, Greece, Caribbean"
                                                className="w-full h-12 pl-12 rounded-lg border-2 border-gray-300 hover:border-primary-400 focus:border-primary-500 focus:ring-primary-500"
                                                aria-label="Destination"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-4">
                                        <label
                                            htmlFor="when"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            When?
                                        </label>
                                        <div className="relative">
                                            <span
                                                className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-primary-600"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M8 7V3M16 7V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </span>
                                            <input
                                                id="when"
                                                name="when"
                                                type="date"
                                                className="w-full h-12 pl-12 rounded-lg border-2 border-gray-300 hover:border-primary-400 focus:border-primary-500 focus:ring-primary-500 appearance-none no-native-picker"
                                                aria-label="Date"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-3">
                                        <label className="block text-sm font-medium text-transparent mb-2 select-none">
                                            Search
                                        </label>
                                        <button
                                            type="submit"
                                            className="w-full inline-flex items-center justify-center h-12 px-6 text-base font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl"
                                        >
                                            <svg
                                                className="w-5 h-5 mr-2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 110-15 7.5 7.5 0 010 15z" />
                                            </svg>
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 bg-primary-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        {home.ctaSection.title}
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                        {home.ctaSection.description}
                    </p>
                    {/* Inline pricing summary */}
                    <div className="mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
                            {pricingData.packages.slice(0, 3).map((pkg) => (
                                <div
                                    key={pkg.id}
                                    className="bg-white rounded-xl shadow-lg p-6 h-full"
                                >
                                    <div className="flex items-baseline justify-between">
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {pkg.name}
                                        </h3>
                                        <div className="text-primary-600 font-extrabold text-2xl">
                                            {(pkg.currency === "EUR" ? "€" : "$") + pkg.price}
                                            <span className="ml-1 text-sm text-gray-600 font-semibold">
                                                {pkg.period}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mt-2">
                                        {pkg.description}
                                    </p>
                                    <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                                        {pkg.features.slice(0, 3).map((f, i) => (
                                            <li key={i} className="flex items-start">
                                                <svg
                                                    className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <CTA href="/prices" variant="secondary">
                        {home.ctaSection.cta}
                    </CTA>
                </div>
            </section>

            {/* 1) A trip like no other */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Video */}
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
                            <video
                                className="w-full h-full object-cover"
                                poster="https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1200&q=80"
                                controls
                                aria-label="A trip like no other video"
                            >
                                <source src="https://cdn.coverr.co/videos/coverr-sailboat-journey-4745/1080p.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        {/* Copy */}
                        <div>
                            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                                A trip like no other.
                            </h2>
                            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                                Sail through crystal waters by day and celebrate under the stars by night.
                                Curated routes, legendary events, and a global community—this is the
                                original yacht week experience that started it all.
                            </p>
                            <CTA href="#"
                                variant="outline"
                            >
                                Watch video
                            </CTA>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2) News quotes carousel */}
            <QuoteCarousel />

            {/* 3) Original Routes */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between mb-10">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                            Original Routes
                        </h2>
                        <CTA href="/prices" variant="outline">Explore all</CTA>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">
                        {/* Card 1 - wide */}
                        <div className="relative md:col-span-3 lg:col-span-4 h-[260px] lg:h-[360px] rounded-2xl overflow-hidden shadow-lg group">
                            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                                From €899
                            </div>
                            <Image
                                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600&q=80"
                                alt="Croatia Route"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 66vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <h3 className="text-2xl lg:text-4xl font-extrabold">Croatia</h3>
                                <p className="text-sm lg:text-base text-white/85 mt-2 max-w-xl">
                                    The original route—hidden coves, ancient towns, and iconic raft parties.
                                </p>
                                <div className="mt-4">
                                    <CTA href="#" variant="secondary">Explore</CTA>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 - tall */}
                        <div className="relative md:col-span-3 lg:col-span-2 h-[260px] lg:h-[360px] rounded-2xl overflow-hidden shadow-lg group">
                            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                                From €1,099
                            </div>
                            <Image
                                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"
                                alt="Greece Route"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <h3 className="text-2xl lg:text-4xl font-extrabold">Greece</h3>
                                <p className="text-sm lg:text-base text-white/85 mt-2 max-w-xl">
                                    Sun-drenched islands, whitewashed villages, and blue-domed horizons.
                                </p>
                                <div className="mt-4">
                                    <CTA href="#" variant="secondary">Explore</CTA>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 - square */}
                        <div className="relative md:col-span-2 lg:col-span-2 h-[220px] lg:h-[300px] rounded-2xl overflow-hidden shadow-lg group">
                            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                                From €999
                            </div>
                            <Image
                                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=80"
                                alt="Montenegro Route"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <h3 className="text-2xl lg:text-3xl font-extrabold">Montenegro</h3>
                                <p className="text-sm lg:text-base text-white/85 mt-2">
                                    Fjord-like bays and dramatic coastlines.
                                </p>
                                <div className="mt-4">
                                    <CTA href="#" variant="secondary">Explore</CTA>
                                </div>
                            </div>
                        </div>
                        {/* Card 4 - square */}
                        <div className="relative md:col-span-4 lg:col-span-4 h-[220px] lg:h-[300px] rounded-2xl overflow-hidden shadow-lg group">
                            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                                From €1,299
                            </div>
                            <Image
                                src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1600&q=80"
                                alt="Caribbean Route"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 66vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <h3 className="text-2xl lg:text-3xl font-extrabold">Caribbean</h3>
                                <p className="text-sm lg:text-base text-white/85 mt-2">
                                    Tropical waters, island-hopping and sunset sails.
                                </p>
                                <div className="mt-4">
                                    <CTA href="#" variant="secondary">Explore</CTA>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4) Talk to the team */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-gray-200 shadow-sm p-8 lg:p-12 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Talk to the team
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                            Questions about routes, pricing, or group bookings? Our team is here to help
                            you plan the week of a lifetime.
                        </p>
                        <CTA href="#contact" variant="primary">Contact us</CTA>
                    </div>
                </div>
            </section>
        </>
    );
}

