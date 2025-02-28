import React from "react";

interface RememberMeProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function RememberMe({ checked, onChange }: RememberMeProps) {
  return (
    <label className="flex gap-0.5 items-center cursor-pointer text-base text-sky-50">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca2f73c61a5a8926b7f605a40672a6463106cca429a9b07f672168ef51fa9b75?placeholderIfAbsent=true&apiKey=38353ef84e424c308f5c4f7d19b497c9"
          alt=""
          className="object-contain shrink-0 aspect-square w-[30px]"
        />
      </div>
      <span className="my-auto">Remember Me</span>
    </label>
  );
}
