import './Features.css';

export default function Features() {
  const features = [
    {
      icon: '📷',
      title: 'Real-Time Scene Description',
      description:
        'Point your camera at anything and get an intelligent, context-aware audio description of your surroundings.',
    },
    {
      icon: '🌐',
      title: 'Multilingual Support',
      description:
        'Get descriptions in Hindi, Telugu, Tamil, and 10+ languages. Choose what\'s most natural for you.',
    },
    {
      icon: '🎙️',
      title: 'Voice-Based Q&A',
      description:
        'Ask follow-up questions about what you see. NayanSaathi listens, understands, and responds.',
    },
    {
      icon: '📄',
      title: 'Document & PDF Reading',
      description:
        'Read textbooks, pamphlets, menus, and signs using built-in OCR. Content is spoken aloud clearly.',
    },
    {
      icon: '🔊',
      title: 'Smart Audio Modes',
      description:
        'Switch between concise summaries and detailed explanations based on your needs.',
    },
    {
      icon: '👥',
      title: 'Community Content',
      description:
        'Access curated audio podcasts, stories, and educational content from the community.',
    },
  ];

  return (
    <section id="features" className="features" aria-labelledby="features-heading">
      <div className="features-container">
        <h2 id="features-heading" className="section-heading">
          What NayanSaathi Can Do
        </h2>
        <div className="features-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <span className="feature-icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
