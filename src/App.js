import React from "react";
import "./styles/global.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import DownloadAppSection from "./components/DownloadAppSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import "./styles/whatsapp.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <FeaturesSection />
      <DownloadAppSection />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />

    </>
  );
}

export default App;
