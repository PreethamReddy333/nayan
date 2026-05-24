import './Contact.css';

export default function Contact() {
  const contacts = [
    {
      name: 'Preetham',
      email: 'preetham9070@gmail.com',
      phone: '6304420571',
    },
    {
      name: 'Sonu',
      email: 'mohammedsonu05@gmail.com',
      phone: '9059177472',
    },
  ];

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="contact-container">
        <h2 id="contact-heading" className="contact-heading">
          Join Our Mission
        </h2>
        <p className="contact-subtitle">
          Whether you&apos;re a developer, researcher, or advocate, let&apos;s work
          together to make the world more accessible.
        </p>

        <div className="contact-cards">
          {contacts.map((person) => (
            <article key={person.email} className="contact-card">
              <h3 className="contact-card-name">{person.name}</h3>
              <p className="contact-card-info">
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </p>
              <p className="contact-card-info">
                <a href={`tel:${person.phone}`}>{person.phone}</a>
              </p>
            </article>
          ))}
        </div>

        <a
          href="mailto:preetham9070@gmail.com"
          className="contact-cta"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
