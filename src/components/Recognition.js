import './Recognition.css';

export default function Recognition() {
  const items = [
    {
      icon: '🏆',
      title: 'Padma Shri Endorsement',
      description:
        'Formally acknowledged by Padma Shri Dr. Sai Baba Goud for its potential to enhance quality of life for visually impaired individuals.',
    },
    {
      icon: '🏛️',
      title: 'TGIC Summit',
      description:
        'Live demonstration at the Telangana Government Innovation Cell Disabled People\'s Day Summit, receiving acclaim from experts and mentors.',
    },
    {
      icon: '🏫',
      title: 'Devnar School Partnership',
      description:
        'Implemented and tested with 30+ visually impaired students aged 8-18 at the Devnar School for the Blind, Hyderabad.',
    },
    {
      icon: '🌱',
      title: 'CSR Funding Secured',
      description:
        'Secured ₹5 Lakh in CSR funding to provide 500 blind students free access to the NayanSaathi app.',
    },
  ];

  return (
    <section className="recognition" aria-labelledby="recognition-heading">
      <div className="recognition-container">
        <h2 id="recognition-heading" className="section-heading">
          Recognition &amp; Partnerships
        </h2>
        <div className="recognition-grid">
          {items.map((item) => (
            <article key={item.title} className="recognition-card">
              <span className="recognition-icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="recognition-title">{item.title}</h3>
              <p className="recognition-description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
