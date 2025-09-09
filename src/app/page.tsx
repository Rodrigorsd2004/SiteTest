"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCarousel from "../components/ProjectCarousel";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      <section id="projects" className="py-20 bg-gray-50">
        <ProjectCarousel />
      </section>
      <Services />
      <About />
      <Testimonials />
      <Clients />
      <CallToAction />
      <Footer />
    </div>
  );
}
