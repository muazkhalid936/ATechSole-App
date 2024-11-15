"use client";
import Footer from "@/components/Footer";
import Deliver from "@/components/Services/Deliver";
import Estimate from "@/components/Services/Estimate";
import Header from "@/components/Services/Header";
import ServicePageServices from "@/components/Services/ServicePageServices";
import ServiceTestonomial from "@/components/Services/ServiceTestonomial";
import ServiceTools from "@/components/Services/ServiceTools";
import React from "react";

const page = () => {
  return (
    <>
      {" "}
      <Header />
      <ServicePageServices />
      <Deliver />
      <ServiceTools />
      <ServiceTestonomial />
      <Estimate />
    </>
  );
};

export default page;
