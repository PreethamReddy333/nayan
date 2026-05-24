import './Team.css';

export default function Team() {
  const founders = [
    {
      initials: 'PR',
      name: 'T Preetham Reddy',
      role: 'Founder',
      department: 'Information Technology, CBIT',
      email: 'preetham9070@gmail.com',
    },
    {
      initials: 'MS',
      name: 'Md Sonu',
      role: 'Co-Founder',
      department: 'Computer Science & Engineering, CBIT',
      email: 'mohammedsonu05@gmail.com',
    },
  ];

  return (
    <section id="team" className="team" aria-labelledby="team-heading">
      <div className="team-container">
        <h2 id="team-heading" className="section-heading">
          Meet the Team
        </h2>
        <p className="team-subtitle">
          Built by students at Chaitanya Bharathi Institute of Technology, Hyderabad
        </p>

        <div className="team-grid">
          {founders.map((founder) => (
            <article key={founder.email} className="team-card">
              <div className="team-avatar" aria-hidden="true">
                {founder.initials}
              </div>
              <h3 className="team-name">{founder.name}</h3>
              <span className="team-role">{founder.role}</span>
              <p className="team-department">{founder.department}</p>
              <a href={`mailto:${founder.email}`} className="team-email">
                {founder.email}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
