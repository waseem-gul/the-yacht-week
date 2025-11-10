import CTA from "./CTA";

interface PriceCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function PriceCard({
  name,
  price,
  period,
  description,
  features,
  popular = false,
}: PriceCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
        popular ? "ring-2 ring-primary-500 scale-105" : ""
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-primary-600">{price}</span>
          <span className="text-gray-600 ml-2">{period}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <CTA
          href="/prices"
          variant={popular ? "primary" : "outline"}
          className="w-full"
        >
          Book Now
        </CTA>
      </div>
    </div>
  );
}

