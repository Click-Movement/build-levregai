import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import TransformationCall from './pages/TransformationCall';
import CallBookedThankYou from './pages/CallBookedThankYou';
import BookCall from './pages/BookCall';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import CustomerAutomation from './pages/CustomerAutomation';
import AiOsWorkshop from './pages/AiOsWorkshop';
import AiOsWorkshopApply from './pages/AiOsWorkshopApply';
import AiOsWorkshopConfirmed from './pages/AiOsWorkshopConfirmed';
import MarketingAssistantWorkshop from './pages/MarketingAssistantWorkshop';
import MarketingAssistantThankYou from './pages/MarketingAssistantThankYou';
import AiMarketingOs from './pages/AiMarketingOs';
import StackSolo from './pages/lm/StackSolo';
import StackSoloThankYou from './pages/lm/StackSoloThankYou';
import LeanBusiness from './pages/lm/LeanBusiness';
import LeanBusinessThankYou from './pages/lm/LeanBusinessThankYou';
import Waitlist from './pages/Waitlist';
import WaitlistConfirmed from './pages/WaitlistConfirmed';
import Build from './pages/Build';
import CroApply from './pages/CroApply';
import CroApplyConfirmed from './pages/CroApplyConfirmed';
import { Toaster } from './components/ui/sonner';

const HEADERLESS_PREFIXES = ['/workshop', '/marketing-os', '/lm', '/waitlist', '/build', '/apply'];
const LANDING_FOOTER_PREFIXES = ['/book-call', '/marketing-os', '/lm', '/waitlist', '/build'];

function AppContent() {
  const location = useLocation();
  const hideHeader = HEADERLESS_PREFIXES.some(prefix => location.pathname.startsWith(prefix));
  const hidMainFooter = LANDING_FOOTER_PREFIXES.some(prefix => location.pathname.startsWith(prefix));

  return (
    <div className="App">
      {!hideHeader && <Header />}
      <main className={hideHeader ? '' : 'pt-20'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/discovery" element={<Contact />} />
          <Route path="/automation" element={<CustomerAutomation />} />
          <Route path="/workshop" element={<AiOsWorkshop />} />
          <Route path="/workshop/apply" element={<AiOsWorkshopApply />} />
          <Route path="/workshop/confirmed" element={<AiOsWorkshopConfirmed />} />
          <Route path="/workshop/marketing-assistant" element={<MarketingAssistantWorkshop />} />
          <Route path="/workshop/marketing-assistant/thank-you" element={<MarketingAssistantThankYou />} />
          <Route path="/marketing-os" element={<AiMarketingOs />} />
          <Route path="/lm/oneteam" element={<StackSolo />} />
          <Route path="/lm/oneteam/access" element={<StackSoloThankYou />} />
          <Route path="/lm/lean" element={<LeanBusiness />} />
          <Route path="/lm/lean/access" element={<LeanBusinessThankYou />} />
          <Route path="/transformation-call" element={<TransformationCall />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/waitlist/confirmed" element={<WaitlistConfirmed />} />
          <Route path="/build" element={<Build />} />
          <Route path="/apply" element={<CroApply />} />
          <Route path="/apply/confirmed" element={<CroApplyConfirmed />} />
          <Route path="/thank-you" element={<CallBookedThankYou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>
      {!hidMainFooter && <Footer />}
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;