import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Highlights from './components/Highlights.jsx';
import About from './components/About.jsx';
import Journeys from './components/Journeys.jsx';
import Planner from './components/Planner.jsx';
import Services from './components/Services.jsx';
import Gallery from './components/Gallery.jsx';
import Reviews from './components/Reviews.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Journeys />
      <Planner />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}