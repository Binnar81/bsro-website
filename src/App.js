import HeroSection from './HeroSection';
import RocketSection from './RocketSection';
import ContactSection from './ContactSection';
import TestimonialSection from './TestimonialSection';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
<Header />
<main className="mx-auto max-w-4xl">
<HeroSection />
<hr className="mx-auto w-1/2 bg-black dark:bg-white" />
<RocketSection />
<hr className="mx-auto w-1/2 bg-black dark:bg-white" />
<TestimonialSection />
<hr className="mx-auto w-1/2 bg-black dark:bg-white" />
<ContactSection />
</main>
<Footer />
    </div>
  );
}

export default App;
