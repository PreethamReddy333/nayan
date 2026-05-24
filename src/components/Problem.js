import './Problem.css';

export default function Problem() {
  const stats = [
    { value: '295M+', label: 'People with visual impairment' },
    { value: '1 in 10', label: 'Have access to assistive tech' },
    { value: '$23B', label: 'Global assistive tech market' },
  ];

  const solutions = [
    {
      name: 'Be My Eyes',
      tag: 'Costly',
      tagClass: 'limited',
      description:
        'Requires human volunteers, inconsistent availability, privacy concerns',
    },
    {
      name: 'TapTapSee',
      tag: 'Basic',
      tagClass: 'fragmented',
      description:
        'Limited object detection only, no contextual understanding or interaction',
    },
    {
      name: 'Physical Prosthetics',
      tag: 'Expensive',
      tagClass: 'expensive',
      description:
        'Extremely costly devices with limited functionality and reliability',
    },
  ];

  return (
    <section className="problem" aria-labelledby="problem-heading">
      <div className="problem-header">
        <h2 id="problem-heading" className="section-heading">
          The Challenge We&apos;re Solving
        </h2>
        <p className="section-subtext">
          Globally, hundreds of millions of people live with visual impairments,
          yet access to affordable, intelligent assistive technology remains
          extremely limited.
        </p>
      </div>

      <div className="problem-stats" role="list" aria-label="Visual impairment statistics">
        {stats.map((stat) => (
          <div key={stat.value} className="problem-stat" role="listitem">
            <span className="problem-stat-number">{stat.value}</span>
            <p className="problem-stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="problem-cards">
        {solutions.map((solution) => (
          <article key={solution.name} className="problem-card">
            <span className={`card-tag ${solution.tagClass}`}>{solution.tag}</span>
            <h3>{solution.name}</h3>
            <p>{solution.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
