import App from "@/components/DevelopentComponents/App";
import Expert from "@/components/DevelopentComponents/Expert";
import Header from "@/components/DevelopentComponents/Header";
import Trust from "@/components/DevelopentComponents/Trust";
import Work from "@/components/DevelopentComponents/Work";
import ServiceTestonomial from "@/components/Services/ServiceTestonomial";
import Work1 from "@/components/Work";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <Trust />
      <Work />
      <Expert />
      <Work1 />
      <ServiceTestonomial />

      <App />
    </>
  );
};

export default page;
