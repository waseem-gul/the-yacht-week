"use client";

import { useState } from "react";
import Link from "next/link";
import content from "@/data/content.json";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nav = content.navigation;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">
              {content.site.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {nav.home}
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {nav.about}
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {nav.howItWorks}
            </Link>
            <Link
              href="/prices"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {nav.prices}
            </Link>
            <Link
              href="/prices"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {nav.home}
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {nav.about}
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {nav.howItWorks}
              </Link>
              <Link
                href="/prices"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {nav.prices}
              </Link>
              <Link
                href="/prices"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

