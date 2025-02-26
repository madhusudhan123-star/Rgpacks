import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Customization from './pages/Customization'; // Fixed typo
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'react-hot-toast';
import './styles/fonts.css'

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <ScrollToTop />
        <div className='font'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/customization" element={<Customization />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="*" element={<h1>Page Not Found</h1>} /> {/* Moved to last */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
