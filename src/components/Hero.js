'use client';

import './Hero.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="mission" className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-content">
          <span className="hero-label">AI-Powered Assistive Technology</span>
          <h1 id="hero-title" className="hero-title">
            Seeing the World<br />Through <span className="highlight">Sound</span>
          </h1>
          <p className="hero-subtitle">
            NayanSaathi uses AI to transform your phone&apos;s camera into an
            intelligent visual assistant, describing scenes, reading text, and
            answering questions in your language.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="hero-cta">
              Download the App <span aria-hidden="true">→</span>
            </a>
            <a href="#features" className="hero-secondary">
              See how it works
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <Image
            src="/images/students.png"
            alt="The NayanSaathi development team with visually impaired students"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
}
