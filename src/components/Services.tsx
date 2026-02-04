export default function Services() {
  const services = [
    {
      title: "Algorithmic Trading Infrastructure",
      description:
        "Custom execution systems, order management, and alpha generation platforms for institutional traders.",
    },
    {
      title: "Tokenization Architecture",
      description:
        "Smart contract development and blockchain infrastructure for asset tokenization and digital securities.",
    },
    {
      title: "Exchange APIs & Liquidity Solutions",
      description:
        "High-performance trading APIs, order book management, and cross-exchange connectivity.",
    },
    {
      title: "Market Making Services",
      description:
        "Liquidity provision, automated market making, and spread optimization for digital assets.",
    },
    {
      title: "Blockchain Indexers",
      description:
        "Custom data indexing solutions for on-chain analytics and real-time market intelligence.",
    },
    {
      title: "Risk Management Systems",
      description:
        "Real-time risk monitoring, position management, and compliance infrastructure.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-main">
        <p className="text-eyebrow mb-4">Services</p>
        <h2 className="text-h2 mb-12">What We Build</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <h3 className="text-h3 mb-4">{service.title}</h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                {service.description}
              </p>
              <span className="link-arrow text-sm">
                Learn more
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
