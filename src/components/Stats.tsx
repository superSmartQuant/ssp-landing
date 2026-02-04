export default function Stats() {
  const stats = [
    {
      number: "15+",
      label: "Dexes & Cexes",
      description: "Used for institutional trading across multiple funds",
    },
    {
      number: "$1.2B+",
      label: "Volume",
      description: "Processed through our infrastructure",
    },
    {
      number: "14+",
      label: "Years",
      description: "Combined hedge fund and institutional experience",
    },
  ];

  return (
    <section className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <p className="text-stat mb-2">{stat.number}</p>
              <p className="text-xl font-semibold text-black mb-2">
                {stat.label}
              </p>
              <p className="text-[var(--color-text-secondary)]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
