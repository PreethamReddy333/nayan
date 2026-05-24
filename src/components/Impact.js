'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import './Impact.css';

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    const numericTarget = parseInt(target, 10);
    if (isNaN(numericTarget)) {
      setCount(target);
      return;
    }

    const duration = 1500;
    const steps = 40;
    const increment = numericTarget / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), numericTarget);
      setCount(current);

      if (step >= steps) {
        clearInterval(timer);
        setCount(numericTarget);
      }
    }, duration / steps);
  }, [target]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.3 }
    );

    const node = ref.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [animate]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const stats = [
    { target: 85, suffix: '%', label: 'Adoption Rate' },
    { target: 78, suffix: '%', label: 'Accuracy Improvement' },
    { target: 30, suffix: '+', label: 'Students Tested' },
    { target: 40, suffix: '', label: 'Weeks of Testing' },
  ];

  const quotes = [
    {
      text: 'I recognized my teacher from her footsteps and voice before she spoke.',
      attribution: 'Student, Age 14',
    },
    {
      text: 'I read a timetable at the bus stop by myself for the first time.',
      attribution: 'Student, Age 16',
    },
    {
      text: 'I was able to describe the contents of a pamphlet to my classmate.',
      attribution: 'Student, Age 12',
    },
  ];

  return (
    <section id="impact" className="impact" aria-labelledby="impact-heading">
      <div className="impact-container">
        <h2 id="impact-heading" className="section-heading">
          Our Impact So Far
        </h2>

        <div className="impact-stats" role="list" aria-label="Impact statistics">
          {stats.map((stat) => (
            <div key={stat.label} className="impact-stat" role="listitem">
              <span className="impact-stat-value">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </span>
              <span className="impact-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="impact-quotes">
          {quotes.map((quote) => (
            <blockquote key={quote.attribution} className="impact-quote">
              <p>&ldquo;{quote.text}&rdquo;</p>
              <footer>{quote.attribution}</footer>
            </blockquote>
          ))}
        </div>

        <p className="impact-attribution">
          Real feedback from students at Devnar School for the Blind, Hyderabad
        </p>
      </div>
    </section>
  );
}
