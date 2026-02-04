export default function About() {
  const founders = [
    {
      title: "Head of Trading",
      background:
        "Former trading lead with experience managing $1.2B across multiple strategies. Built execution systems processing $30M daily volume.",
    },
    {
      title: "Fund Executive",
      background:
        "Ex-COO overseeing operations for $300M AUM. Led infrastructure development and institutional partnerships.",
    },
    {
      title: "Head Of Engineering",
      background:
        "Built trading and risk systems for institutional clients. Architected infrastructure handling billions in transaction volume.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-main">
        <p className="text-eyebrow mb-4">Who We Are</p>
        <h2 className="text-h2 mb-8">Built by Operators, For Operators</h2>

        <p className="text-body-lg max-w-3xl mb-12">
          SSP Labs was founded by three hedge fund veterans who spent years
          building and managing infrastructure for institutional capital.
          We&apos;ve architected systems that handled hundreds of millions in
          daily volume, managed multi-million dollar portfolios, and built the
          technology that powered alpha generation at scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white p-6 border border-[var(--color-border)]"
            >
              <h3 className="text-h3 mb-4">{founder.title}</h3>
              <p className="text-[var(--color-text-secondary)]">
                {founder.background}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl">
          <h3 className="text-xl font-semibold mb-4">Why We Started</h3>
          <p className="text-body-lg text-[var(--color-text-secondary)]">
            We saw a persistent gap: institutions entering DeFi and crypto
            needed the same caliber of infrastructure they had in traditional
            markets. We&apos;re here to build it.
          </p>
        </div>
      </div>
    </section>
  );
}
