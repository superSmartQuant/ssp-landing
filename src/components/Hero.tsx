export default function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-white">
      <div className="container-main">
        <div className="max-w-4xl">
          <p className="text-eyebrow mb-4">Financial Infrastructure</p>
          <h1 className="text-h1 mb-6">
            Institutional-Grade Infrastructure for DeFi & CeFi
          </h1>
          <p className="text-body-lg max-w-2xl mb-8 text-[var(--color-text-secondary)]">
            Built by hedge fund operators who&apos;ve managed $300M+ and
            processed $1.2B+ in volume. We architect the systems that power alpha
            generation, tokenization, and market infrastructure.
          </p>
          <a
            href="https://calendly.com/lambda-supersmartpeople/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Schedule Technical Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
