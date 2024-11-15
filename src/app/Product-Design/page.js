import AppInvent from "@/components/Consult/AppInvent";
import End from "@/components/Design/End";
import Header from "@/components/Design/Header";
import Ideas from "@/components/Design/Ideas";
import Mobile from "@/components/Design/Mobile";
import Planning from "@/components/Design/Planning";
import Work from "@/components/Work";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <Planning />
      <Work />
      <Mobile />

      <AppInvent />
      <End />
    </>
  );
};

export default page;
