"use client";
import * as React from "react";
import { LoginForm } from "./Desktop/LoginForm";

export default function LoginPage() {
  return (
    <main className="overflow-hidden pl-16 bg-gray-800 max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col">
        <section className="w-[35%] max-md:ml-0 max-md:w-full">
          <LoginForm />
        </section>
        <section className="ml-5 w-[65%] max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d037da5b3b0bda40d6e554876663346052a6960eeb2313095d0d4d9628c19fd?placeholderIfAbsent=true&apiKey=38353ef84e424c308f5c4f7d19b497c9"
            alt="Login illustration"
            className="object-contain grow w-full rounded-xl aspect-[0.81] max-md:mt-10 max-md:max-w-full"
          />
        </section>
      </div>
    </main>
  );
}
