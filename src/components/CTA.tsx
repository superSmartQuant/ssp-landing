export default function CTA() {
  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-main text-center">
        <h2 className="text-h2 text-white mb-6">Ready to Build?</h2>
        <p className="text-body-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Let&apos;s discuss your infrastructure needs. Schedule a technical
          consultation with our team.
        </p>
        <a
          href="https://calendly.com/lambda-supersmartpeople/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold hover:bg-gray-100 transition-colors duration-200"
        >
          Schedule Consultation
        </a>
      </div>
    </section>
  );
}
