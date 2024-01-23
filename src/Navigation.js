import React from 'react';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navigation = () => {
  return (
    <nav className="flex min-h-screen flex-col items-center py-8" aria-label="mobile">
      <a href="#hero" onClick={() => scrollToSection('hero')} className="w-full py-6 text-center hover:opacity-90">Home</a>
      <a href="#rockets" onClick={() => scrollToSection('rockets')} className="w-full py-6 text-center hover:opacity-90">Our Rockets</a>
      <a href="#testimonials" onClick={() => scrollToSection('testimonials')} className="w-full py-6 text-center hover:opacity-90">Testimonials</a>
      <a href="#contact" onClick={() => scrollToSection('contact')} className="w-full py-6 text-center hover:opacity-90">Contact Us</a>
      <a href="#footer" onClick={() => scrollToSection('footer')} className="w-full py-6 text-center hover:opacity-90">Legal</a>
    </nav>
  );
};

export default Navigation;
