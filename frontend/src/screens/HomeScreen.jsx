import React from "react";
import Crousel from "../components/Crousel/Crousel";
import Features from "../components/Features/Features";
import Bestpoints from '../components/Bestpoints/Bestpoints';
import HomeProducts from '../components/HomeProducts/HomeProducts';
import MemberCard from '../components/MemberCard/MemberCard';
import {useDispatch, useSelector} from "react-redux";

function HomeScreen() {
  let dispatch = useDispatch();
  let counterState = useSelector((state) => {
      return state["counter"];
  });

  let {count} = counterState;
  console.log("counter",count)

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
