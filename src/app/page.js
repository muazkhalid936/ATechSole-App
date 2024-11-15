import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solution from "@/components/Solution";
import Work from "@/components/Work";
import SectionClient from "@/components/SectionClient";
import SectionPartner from "@/components/SectionPartner";
import ThreeDDonutChart from "@/components/Chart1";
import CareerProgressionChart from "@/components/Bars";
export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Solution />
      <SectionClient />
      <Work />
      <SectionPartner />
      <div style={{padding:"50px 0px",background:"white"}}>

      <ThreeDDonutChart />
      </div>
    </div>
  );
}
