"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-[var(--color-border)]">
      <div className="container-main">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight text-black">
              SSP Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[var(--color-text-body)] hover:text-black font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://calendly.com/lambda-supersmartpeople/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[var(--color-border)]">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[var(--color-text-body)] hover:text-black font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://calendly.com/lambda-supersmartpeople/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
