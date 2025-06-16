import React from "react";
import Hero from "@/components/common/Hero";
import Listing from "@/components/common/Listing";
import Filter from "@/components/common/Filter";
import HorizontalScroll from "@/components/common/HorizontalScroll";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HorizontalScroll />
      <Hero />
      <Filter />
      <Listing />
    </div>
  );
}