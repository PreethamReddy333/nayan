'use client';

import './Testimonial.css';

export default function Testimonial() {
  return (
    <section className="testimonial" aria-labelledby="testimonial-heading">
      <div className="container">
        <h2 id="testimonial-heading" className="testimonial-heading section-heading">
          Hear From Our Users
        </h2>

        <div className="testimonial-video-wrapper">
          <iframe
            id="testimonial-video"
            className="testimonial-video"
            src="https://drive.google.com/file/d/10qNtM1VeDbDJjCVQCO0A5XcLqLDJWowp/preview"
            title="NayanSaathi user testimonial video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <blockquote className="testimonial-quote">
          <p>&ldquo;I read a timetable at the bus stop by myself for the first time.&rdquo;</p>
          <footer className="testimonial-attribution">
            — Student, Devnar School for the Blind, Hyderabad
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
