import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Testimonial from '@/components/Testimonial';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Impact from '@/components/Impact';
import Recognition from '@/components/Recognition';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Testimonial />
        <Problem />
        <Features />
        <HowItWorks />
        <Impact />
        <Recognition />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
