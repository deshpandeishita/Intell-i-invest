"use client";
import React, { useState } from "react";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function PasswordInput({ value, onChange }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col mb-8">
      <label className="text-xl text-blue-300 mb-3.5">Password</label>
      <div className="flex gap-5 justify-between px-7 py-1.5 bg-sky-50 rounded-3xl max-md:px-5 max-md:max-w-full">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter you password"
          className="w-full bg-transparent text-2xl leading-none text-black py-3 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="focus:outline-none"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3c919da319d61ef9426ee17fd20fda3647dff2010088054d14afe39560465f8?placeholderIfAbsent=true&apiKey=38353ef84e424c308f5c4f7d19b497c9"
            alt=""
            className="object-contain shrink-0 aspect-square w-[51px]"
          />
        </button>
      </div>
    </div>
  );
}
