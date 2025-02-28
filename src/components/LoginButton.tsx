import React from "react";

interface LoginButtonProps {
  onClick: () => void;
}

export function LoginButton({ onClick }: LoginButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full px-16 pt-3 pb-5 mt-12 text-3xl text-center text-white whitespace-nowrap bg-blue-600 rounded-3xl hover:bg-blue-700 transition-colors max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      Login
    </button>
  );
}
