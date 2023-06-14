import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <Newsletter></Newsletter>
      <Cards></Cards>
      <Footer></Footer>
    </main>
  );
};

export default App;
