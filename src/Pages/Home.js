import { useContext, useEffect } from "react";
import Footer from "../Components/Footer";
import HeaderComponent from "../Components/HeaderComponent";
import HeroSection from "../Components/HeroSection";
// import Items from "../Components/Items";
import { Context } from "../main";

const Home = () => {
  return (
    <div className="app-layout dark:bg-base-100">
      <HeaderComponent />
      <HeroSection />
      {/* <Items /> */}
      <Footer />
    </div>
  );
};

export default Home;
