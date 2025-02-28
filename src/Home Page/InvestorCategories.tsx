import * as React from "react";
import { CategoryCard } from "./CategoryCard";
import { Divider } from "./Divider";

export function InvestorCategories() {
  const categories = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ea437e5c16ed37f3e0a258c379eb0e6f4addcf3ebc0d3303715d95cabbbc3624?placeholderIfAbsent=true&apiKey=38353ef84e424c308f5c4f7d19b497c9",
      title: "New Investors",
      altText: "New Investors Icon",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9f5d4482832b99a7164d986e94a4bc962635f90842b0c349fb702a0f7d8d5238?placeholderIfAbsent=true&apiKey=38353ef84e424c308f5c4f7d19b497c9",
      title: "Experienced",
      altText: "Experienced Investors Icon",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/24d5fa37de661708b546f63d795f276141b1c7ae8027664d08befd97d94e62ca?placeholderIfAbsent=true&apiKey=38353ef84e424c308f5c4f7d19b497c9",
      title: "Small Scale Investors",
      altText: "Small Scale Investors Icon",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7fe64aacc9bc95b6c726521a0605c63c0b235a829b59c18528e0f5ac8763170a?placeholderIfAbsent=true&apiKey=38353ef84e424c308f5c4f7d19b497c9",
      title: "Large Scale Investors",
      altText: "Large Scale Investors Icon",
    },
  ];

  return (
    <section className="flex gap-5 justify-between items-center self-end mt-8 mr-12 w-full text-2xl text-center text-black max-w-[1283px] max-md:mr-2.5 max-md:max-w-full">
      {categories.map((category, index) => (
        <React.Fragment key={category.title}>
          <CategoryCard
            imageUrl={category.imageUrl}
            title={category.title}
            altText={category.altText}
          />
          {index < categories.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </section>
  );
}
