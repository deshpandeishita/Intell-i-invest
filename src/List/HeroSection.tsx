import * as React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="flex relative flex-col self-stretch pb-28 w-full min-h-[368px] shadow-[0px_7px_8px_rgba(0,0,0,0.25)] max-md:pb-24 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b6586d6d8578e2c6409d5f8a90f9b64982bee0a955951b53d5db38cf5aeee5e?placeholderIfAbsent=true&apiKey=38353ef84e424c308f5c4f7d19b497c9"
        alt="Iron Industry Background"
        className="object-cover absolute inset-0 size-full"
      />
      <Header />
      <h2 className="relative self-start mt-24 mb-0 ml-16 text-6xl text-white max-md:mt-10 max-md:mb-2.5 max-md:max-w-full max-md:text-4xl">
        Sector &gt; Iron Industry
      </h2>
    </section>
  );
};
