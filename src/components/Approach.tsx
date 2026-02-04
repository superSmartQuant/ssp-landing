export default function Approach() {
  const approaches = [
    {
      title: "Institutional Standards",
      description:
        "We build with the rigor, security, and performance standards required by regulated financial institutions.",
    },
    {
      title: "Battle-Tested Architecture",
      description:
        "Our systems are based on frameworks that have managed real capital under real market conditions.",
    },
    {
      title: "Technical Depth",
      description:
        "From smart contract auditing to microsecond execution optimization, we understand the full stack.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <h2 className="text-h2 mb-12">Our Approach</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div key={index}>
              <h3 className="text-h3 mb-4">{approach.title}</h3>
              <p className="text-[var(--color-text-secondary)]">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
