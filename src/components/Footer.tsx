import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ];

  return (
    <footer className="bg-black text-white py-16 md:py-20">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight mb-4 inline-block">
              SSP Labs
            </Link>
            <p className="text-gray-400 max-w-md mt-4">
              Institutional-grade financial infrastructure for DeFi and CeFi.
              Built by hedge fund operators.
            </p>
          </div>

          {/* Links */}
          <div className="md:text-right">
            <nav className="flex flex-wrap gap-6 md:justify-end">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} SSP Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
