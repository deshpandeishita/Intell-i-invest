"use client";
import * as React from "react";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { InvestorCategories } from "./InvestorCategories";

function HomeScreen() {
  return (
    <main className="flex overflow-hidden flex-col pb-14 bg-blue-300">
      <HeroSection />
      <section className="self-center mt-9 text-4xl text-center text-black">
        Our Range
      </section>
      <InvestorCategories />
    </main>
  );
}

export default HomeScreen;
