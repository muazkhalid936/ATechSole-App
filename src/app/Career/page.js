"use client"; 
import dynamic from "next/dynamic";
import CareerArea from "@/components/CareerArea";
import CareerHeader from "@/components/CareerHeader";
import CareerRules from "@/components/CareerRules";
import Deliver from "@/components/Consult/Deliver";

const CareerProgressionChart = dynamic(() => import("@/components/Bars"), {
  ssr: false, 
});

const page = () => {
  return (
    <>
      <CareerHeader />

      <CareerArea />
      <Deliver />
      <CareerProgressionChart /> 

      <CareerRules />
    </>
  );
};

export default page;
