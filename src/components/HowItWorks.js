import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Capture',
      description:
        'Point your phone\'s camera at anything — a scene, a document, or a sign.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 6V4.5C7 4.22 7.22 4 7.5 4h3c.28 0 .5.22.5.5V6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'Understand',
      description:
        'Our Vision AI processes the image using advanced transformer models to understand the full context.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 6l-1 1.5V19h-6v-2.5L8 15c-1.5-1.5-3-3.5-3-6a7 7 0 0 1 7-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9 19h6v1.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 20.5V19Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 12h4M12 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Listen',
      description:
        'Receive a clear, detailed audio description in your preferred language. Ask follow-up questions anytime.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 10v4a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M15.5 8.5a4 4 0 0 1 0 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18 6a7 7 0 0 1 0 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="how-it-works" aria-labelledby="how-it-works-heading">
      <div className="how-it-works-container">
        <h2 id="how-it-works-heading" className="section-heading">
          How It Works
        </h2>
        <div className="how-it-works-steps">
          {steps.map((step, index) => (
            <div key={step.number} className="how-it-works-step">
              <div className="step-icon-wrapper">
                {step.icon}
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector" aria-hidden="true"></div>
              )}
              <span className="step-number">Step {step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
