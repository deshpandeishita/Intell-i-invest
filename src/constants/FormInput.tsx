import React from "react";

interface FormInputProps {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function FormInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div className="flex flex-col mb-8">
      <label className="text-xl text-blue-300 mb-3.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="px-7 py-5 text-2xl leading-none text-black bg-sky-50 rounded-3xl max-md:px-5 max-md:max-w-full"
      />
    </div>
  );
}
