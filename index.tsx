import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import WorkPage from './pages/WorkPage';
import ProcessPage from './pages/ProcessPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col">
        <ScrollToTop />
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />

        <ChatWidget />
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error("Root element not found");
}