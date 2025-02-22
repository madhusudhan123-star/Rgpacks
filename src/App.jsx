import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Customization from './pages/Custimization'; // Fixed typo
import Private from './pages/Private';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/customization" element={<Customization />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/private" element={<Private />} />
          <Route path="*" element={<h1>Page Not Found</h1>} /> {/* Moved to last */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
