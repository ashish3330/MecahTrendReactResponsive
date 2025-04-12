import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/About/Leadership';
import DesignDevelopment from './pages/About/DesignDevelopment';
import HistoryBackground from './pages/About/HistoryBackground';
import Products from './pages/Products';
import Facilities from './pages/Facilities';
import Customers from './pages/Customers';
import BestPractices from './pages/BestPractices';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="m-0 p-0 w-screen overflow-x-hidden">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/leadership" element={<Leadership />} />
            <Route path="/about/design-development" element={<DesignDevelopment />} />
            <Route path="/about/history-background" element={<HistoryBackground />} />
            <Route path="/products" element={<Products />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/best-practices" element={<BestPractices />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
