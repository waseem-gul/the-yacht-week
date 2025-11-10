import Link from "next/link";
import content from "@/data/content.json";

export default function Footer() {
  const footer = content.footer;

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{content.site.name}</h3>
            <p className="text-gray-300 mb-4">{content.site.tagline}</p>
            <p className="text-gray-400 text-sm">
              Creating unforgettable sailing adventures since 2006.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {footer.links.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {footer.links.howItWorks}
                </Link>
              </li>
              <li>
                <Link
                  href="/prices"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {footer.links.prices}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {footer.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={footer.social.instagram}
                >
                  {footer.social.instagram}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={footer.social.facebook}
                >
                  {footer.social.facebook}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={footer.social.twitter}
                >
                  {footer.social.twitter}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-800 mt-12 pt-8">
          <p className="text-gray-400 text-sm text-center">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

