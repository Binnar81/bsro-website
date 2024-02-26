import React from 'react'

const Nav = () => {
  return (
    <>
       <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
        <a href="#hero" className="hover:opacity:90">Home</a>
          <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
          <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
          <a href="#contact" class="hover:opacity-90">Contact Us</a>
          <a href="#footer" className="hover:opacity-90">Legal</a>
        </nav>
    </>
  )
}

export default Nav
