import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import Gallery from './components/home/Gallery';
import Stats from './components/home/Stats';
import Testimonials from './components/home/Testimonials';
import Location from './components/home/Location';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/ui/SmoothScroll';
import Collection from './pages/Collection';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Gallery />
      <Testimonials />
      <Location />
    </main>
  );
}

function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <div className="bg-bg-primary min-h-screen text-white selection:bg-accent-primary selection:text-white">
          <CustomCursor />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
