import React, { useEffect } from "react";
import "./App.css";
import { Hero } from "./components/Hero";
import { EmotionalSection } from "./components/EmotionalSection";
import { CelebrationSection } from "./components/CelebrationSection";
import { LocationSection } from "./components/LocationSection";
import { RSVPSection } from "./components/RSVPSection";
import { HowToGetSection } from "./components/HowToGetSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <Hero />
      <EmotionalSection />
      <CelebrationSection />
      <LocationSection />
      <RSVPSection />
      <HowToGetSection />
      <ContactSection />
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
