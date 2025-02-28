"use client";
import * as React from "react";
import { Navbar } from "./Navbar";

export function HeroSection() {
  return (
    <section className="flex relative flex-col items-center pb-40 w-full min-h-[658px] max-md:pb-24 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f9fdcb48db7c01600d0eba55df52dfcd1f7f882db81aa021fffcfde96b7e13e?placeholderIfAbsent=true&apiKey=38353ef84e424c308f5c4f7d19b497c9"
        alt="Hero background"
        className="object-cover absolute inset-0 size-full"
      />
      <Navbar />
      <h2 className="relative mt-48 text-7xl text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Where would you like to Invest Today?
      </h2>
      <div className="flex relative flex-wrap gap-10 px-7 py-1.5 mt-12 -mb-8 max-w-full text-3xl text-black bg-white rounded-xl w-[797px] max-md:px-5 max-md:mt-10 max-md:mb-2.5">
        <input
          type="text"
          placeholder="Enter your industry sector here"
          className="flex-auto my-auto max-md:max-w-full bg-transparent outline-none"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/249d97cf92e744fa8a1997e70f92f03a148657a3dc646bf9789e38495a453eef?placeholderIfAbsent=true&apiKey=38353ef84e424c308f5c4f7d19b497c9"
          alt="Search"
          className="object-contain shrink-0 aspect-square w-[63px]"
        />
      </div>
    </section>
  );
}
