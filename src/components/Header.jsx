import React from "react";

export default function Header() {
  return (
    <>
      <header className="bg-blue-500 grid grid-cols-3 gap-4">
        <section className="text-center text-white">PIE menu</section>
        <h1 className="text-3xl text-center font-bold text-gray-900">
          harkness-pies
        </h1>
        <section className="text-center text-white">INSTA Icon</section>
      </header>
    </>
  );
}
