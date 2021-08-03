import React from "react";
import Layout from "../layout";
import IntroSection from "../components/IntroSection/IntroSection";
import HotelsSection from "../components/HotelsSection/HotelsSection";
import RsvpSection from "../components/RsvpSection/RsvpSection";
import TransportationSection from "../components/TransportationSection/TransportationSection";
import SiteNav from "../components/SiteNav/SiteNav";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const stOptions = {
    start: "top top",
    scrub: 1,
    endTrigger: "#intro",
    end: "top top",
  };

  React.useEffect(() => {
    gsap.to("#photoOne", {
      scrollTrigger: stOptions,
      y: -200,
    });
    gsap.to("#photoTwo", {
      scrollTrigger: stOptions,
      y: 50,
    });
    gsap.to("#photoThree", {
      scrollTrigger: stOptions,
      y: -100,
    });
  }, []);
  return (
    <>
      <SiteNav />
      <Layout>
        <div className="section-offset"></div>
        <div id="intro"></div>
        <IntroSection />
        <div id="hotels"></div>
        <HotelsSection />
        <TransportationSection />
        <RsvpSection />
      </Layout>
    </>
  );
};

export default Index;
