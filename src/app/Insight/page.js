import FilterSection from "@/components/Insight/FilterSection";
import Header from "@/components/Insight/Header";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <div style={{ paddingBottom: "200px" }}>
        <FilterSection />
      </div>{" "}
    </>
  );
};

export default page;
