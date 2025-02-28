"use client";
import * as React from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { CompanyTable } from "./CompanyTable";

function List() {
  return (
    <main className="flex overflow-hidden flex-col items-center pb-44 bg-blue-300 max-md:pb-24">
      <HeroSection />
      <CompanyTable />
    </main>
  );
}

export default List;
