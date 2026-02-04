export default function UseCases() {
  const useCases = [
    "Hedge funds building algorithmic trading systems",
    "Companies tokenizing equity or real-world assets",
    "Exchanges requiring high-performance API infrastructure",
    "Crypto projects needing professional market making",
    "Institutions requiring custom blockchain indexers",
  ];

  return (
    <section className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-main">
        <p className="text-eyebrow mb-4">Who We Serve</p>
        <h2 className="text-h2 mb-8">From Traditional Finance to Crypto-Native</h2>

        <ul className="max-w-2xl space-y-4">
          {useCases.map((useCase, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-body-lg text-[var(--color-text-body)]"
            >
              <span className="flex-shrink-0 w-2 h-2 mt-3 bg-black rounded-full" />
              {useCase}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
