import React from "react";
import "./App.css";
import { HeroNew } from "./components/HeroNew";
import { VenueSection } from "./components/VenueSection";
import { RSVPSectionNew } from "./components/RSVPSectionNew";
import { HowToGetThereNew } from "./components/HowToGetThereNew";
import { OurStory } from "./components/OurStory";
import { ContactSectionNew } from "./components/ContactSectionNew";
import { FooterNew } from "./components/FooterNew";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <HeroNew />
      <VenueSection />
      <RSVPSectionNew />
      <HowToGetThereNew />
      <OurStory />
      <ContactSectionNew />
      <FooterNew />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
