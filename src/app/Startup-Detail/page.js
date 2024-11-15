import AppInvent from "@/components/Consult/AppInvent";
import WorkWithUs from "@/components/Consult/WorkWithUs";
import Benifits from "@/components/Startup/Benifits";
import Creative from "@/components/Startup/Creative";
import Header from "@/components/Startup/Header";
import Offer from "@/components/Startup/Offer";
import StayWithUs from "@/components/Startup/StayWithUs";
import Work from "@/components/Work";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <Offer />
      <Benifits />
      <Creative />
      <StayWithUs />
      <Work />
      <AppInvent />
      <WorkWithUs />
    </>
  );
};

export default page;
