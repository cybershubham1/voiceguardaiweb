import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import ResearchPage from './pages/ResearchPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import NewsPage from './pages/NewsPage';
import AiResearchPage from './pages/AiResearchPage';
import ContactPage from './pages/ContactPage';
import DemoPage from './pages/DemoPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/ai-research" element={<AiResearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;