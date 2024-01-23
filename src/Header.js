import Nav from './Nav';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const initApp = () => {
      const hamburgerBtn = document.getElementById('hamburger-button');
      const mobileMenu = document.getElementById('mobile-menu');

      const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn');
      };

      hamburgerBtn.addEventListener('click', toggleMenu);
      mobileMenu.addEventListener('click', toggleMenu);

      return () => {
        hamburgerBtn.removeEventListener('click', toggleMenu);
        mobileMenu.removeEventListener('click', toggleMenu);
      };
    };

    initApp();
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-teal-700 text-white">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀 BSRO Rockets</a>
        </h1>
        <div>
          <button
            id="hamburger-button"
            className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"            onClick={toggleMenu}
          >
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <Nav />
        </div>
      </section>
      <section
        id="mobile-menu"
        className={`top-68 justify-center absolute w-full origin-top animate-open-menu flex-col bg-black text-5xl ${
          isMobileMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        <button
          className="text-8xl self-end px-6"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <Navigation/>
      </section>
    </header>
  );
}

export default Header;
