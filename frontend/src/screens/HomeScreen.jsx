import React from "react";
import Crousel from "../components/Crousel/Crousel";
import Features from "../components/Features/Features";
import Bestpoints from '../components/Bestpoints/Bestpoints';
import HomeProducts from '../components/HomeProducts/HomeProducts';
import MemberCard from '../components/MemberCard/MemberCard';

function HomeScreen() {
  return (
    <>
      <Crousel />
      <Bestpoints />
      <HomeProducts />
      <MemberCard />
      <Features />
    </>
  );
}

export default HomeScreen;
