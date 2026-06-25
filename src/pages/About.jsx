import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import MisionVison from "../components/MisionVision";
import WhyChoose from "../components/WhyChoose";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <About/>
      <MisionVison/>
      <WhyChoose/>
      <Footer />
    </>
  );
}
