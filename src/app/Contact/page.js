import ContactAddress from "@/components/ContactAddress";
import ContactForm from "@/components/ContactForm";
import ContactHeader from "@/components/ContactHeader";
import ContactTeam from "@/components/ContactTeam";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactMap from "@/components/Work/ContactMap";
import React from "react";

const page = () => {
  return (
    <div>
      <ContactHeader />
      <ContactForm />
      <ContactAddress />
      <ContactMap />
      <ContactTeam />
        
    </div>
  );
};

export default page;
