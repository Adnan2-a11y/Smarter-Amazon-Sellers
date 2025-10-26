import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ✅ Pages
import Home from './src/pages/Home';
import Demo from './src/pages/Demo';
import Features from './src/pages/Features';
import Pricing from './src/pages/Pricing';
import About from './src/pages/About';
import LoginPage from './src/pages/LoginPage';
import SignupPage from './src/pages/SignupPage';
import BlogPage from './src/pages/BlogPage'; // ✅ Added Blog Page
import NotFound from './src/pages/NotFound';

// ✅ Components
import Header from './src/components/Header';

const App: React.FC = () => {
  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router>
        <Header />
        <main className="min-h-screen font-inter pt-20"> {/* pt-20 for fixed header spacing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/blog" element={<BlogPage />} /> {/* ✅ Added Blog route */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* ✅ Toast Notifications */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
          />
        </main>
      </Router>
    </Theme>
  );
};

export default App;