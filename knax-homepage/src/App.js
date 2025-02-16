   // src/App.js
   import React, { useState } from 'react';
   import HeroSection from './components/HeroSection';
   import ProductMarketplace from './components/ProductMarketplace';
   import FeaturedProducts from './components/FeaturedProducts';
   import InternshipSection from './components/InternshipSection';
   import BusinessGrowth from './components/BusinessGrowth';
   import AIChatAssistant from './components/AIChatAssistant';
   import CommunityTrust from './components/CommunityTrust';
   import CallToAction from './components/CallToAction';
   import Testimonials from './components/Testimonials';
   import NewsletterSignup from './components/NewsletterSignup';
   import Footer from './components/Footer';
   import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary
   import CompanyDetails from './components/CompanyDetails'; // Import the CompanyDetails
   import './styles.css'; // Import the updated styles
   import Header from './components/Header'; // Import the new Header component

   const App = () => {
       const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

       return (
           <ErrorBoundary>
               <div style={{ backgroundColor: isDarkMode ? '#1c1c1c' : '#f4f4f4' }}>
                   <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> {/* Sticky Header */}
                   <HeroSection />
                   <FeaturedProducts />
                   <ProductMarketplace />
                   <BusinessGrowth />
                   <InternshipSection />
                   <Testimonials />
                   <NewsletterSignup />
                   <AIChatAssistant />
                   <CompanyDetails /> {/* Company Details Section */}
                   <Footer />
               </div>
           </ErrorBoundary>
       );
   };

   export default App;