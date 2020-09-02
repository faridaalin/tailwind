import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative">
      <div className="sm:flex sm:items-center sm:justify-between sm:px-6 sm:py-4">
        <div className="flex justify-between items-center px-6 py-4 sm:p-0">
          <a href="/" className="text-gray-900 font-bold text-3xl">
            Logo
          </a>
          <div onClick={() => setIsOpen(!isOpen)} className="font-semibold text-gray-800 text-2xl sm:hidden">
            menu
          </div>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} absolute w-full px-3 pb-4 sm:static sm:w-auto sm:flex sm:p-0 `}>
          <a href="/" className="block px-3 py-1 mb-1 text-black hover:bg-gray-200 rounded sm:mb-0 sm:ml-2">Register</a>
          <a href="/" className="block px-3 py-1 text-black hover:bg-gray-200 rounded sm:ml-2">Login</a>
        </div>
      </div>
    </header>
  );
}
