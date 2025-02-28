import * as React from "react";

interface CategoryCardProps {
  imageUrl: string;
  title: string;
  altText: string;
}

export function CategoryCard({ imageUrl, title, altText }: CategoryCardProps) {
  return (
    <article className="flex flex-col self-stretch my-auto">
      <img
        src={imageUrl}
        alt={altText}
        className="object-contain self-center max-w-full aspect-square w-[140px]"
      />
      <h3 className="mt-2.5 text-2xl text-center">{title}</h3>
    </article>
  );
}
