import React from "react";
import Navbar from "../components/Navbar";
import OurPlans from "../components/OurPlans";
import Coverages from "../components/Coverages";
import Footer from "../components/Footer";

export default function Plans() {
  return (
    <>
      <Navbar />
      <OurPlans />
      <Coverages />
      <Footer />
    </>
  );
}
