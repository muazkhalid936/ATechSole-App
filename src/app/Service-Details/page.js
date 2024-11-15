import DetailProject from "@/components/DetailProject";
import DetailProjectHandle from "@/components/DetailProjectHandle";
import DetailsHalfPage from "@/components/DetailsHalfPage";
import ServiceDetailHeader from "@/components/ServiceDetailHeader";
import ServiceDetailSolution from "@/components/ServiceDetailSolution";
import ServiceDevelop from "@/components/ServiceDevelop";
import Work from "@/components/Work";
import React from "react";

const page = () => {
  return (
    <>
      <ServiceDetailHeader />
      <ServiceDevelop />
      <ServiceDetailSolution />
      <Work />
      
      <DetailProject />
      <DetailProjectHandle />
      <DetailsHalfPage />
        
    </>
  );
};

export default page;
