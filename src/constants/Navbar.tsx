import * as React from "react";

export function Navbar() {
  return (
    <header className="flex relative flex-wrap gap-5 justify-between self-stretch px-16 py-4 w-full text-emerald-50 bg-gray-800 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 text-4xl whitespace-nowrap">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e322124554fe8d5c4deeff6a7632cb03e78a81be809b73e5fe9b89280e0f2a6?placeholderIfAbsent=true&apiKey=38353ef84e424c308f5c4f7d19b497c9"
          alt="Intell-I-Invest Logo"
          className="object-contain shrink-0 aspect-square w-[65px]"
        />
        <h1 className="my-auto basis-auto">Intell-I-Invest</h1>
      </div>
      <nav className="flex gap-10 my-auto text-2xl max-md:max-w-full">
        <a href="#" className="hover:text-white">
          Home
        </a>
        <a href="#" className="basis-auto hover:text-white">
          About Us
        </a>
        <a href="#" className="basis-auto hover:text-white">
          Contact Us
        </a>
      </nav>
    </header>
  );
}
