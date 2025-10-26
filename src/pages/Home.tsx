import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import CoreFeatures from '../components/CoreFeatures';
import HowItWorks from '../components/HowItWorks';
import DashboardPreview from '../components/DashboardPreview';
import UseCases from '../components/UseCases';
import PricingTeaser from '../components/PricingTeaser';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <CoreFeatures />
        <HowItWorks />
        <DashboardPreview />
        <UseCases />
        <PricingTeaser />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Home;