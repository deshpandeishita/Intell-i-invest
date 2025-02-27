"use client";
import React, { useState } from "react";
import { FormInput } from "./FormInput";
import { PasswordInput } from "../PasswordInput";
import { RememberMe } from "../RememberMe";
import { LoginButton } from "./LoginButton";

export function LoginForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full"
    >
      <FormInput
        label="Name"
        placeholder="Enter you name"
        value={formData.name}
        onChange={(value) => setFormData({ ...formData, name: value })}
      />

      <FormInput
        label="E-mail"
        type="email"
        placeholder="Enter you e-mail"
        value={formData.email}
        onChange={(value) => setFormData({ ...formData, email: value })}
      />

      <PasswordInput
        value={formData.password}
        onChange={(value) => setFormData({ ...formData, password: value })}
      />

      <RememberMe
        checked={formData.rememberMe}
        onChange={(checked) =>
          setFormData({ ...formData, rememberMe: checked })
        }
      />

      <LoginButton onClick={handleSubmit} />
    </form>
  );
}
