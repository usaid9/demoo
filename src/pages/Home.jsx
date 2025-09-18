import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Secmid from "../components/sections/Secmid";
import Footer from "../components/layout/Footer";

import "../styles/Top.css";
import "../styles/mid.css";
import "../styles/ourfeatures.css";
import "../styles/ourteam.css";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
        <Secmid />
        <Footer />
    </>
  )
}
