import React from "react";
import Layout from "../layout";
import IntroSection from "../components/IntroSection/IntroSection";
import HotelsSection from "../components/HotelsSection/HotelsSection";
export default function Index() {
  return (
    <Layout>
      <IntroSection />
      <HotelsSection />
    </Layout>
  );
}
