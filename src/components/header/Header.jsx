import React from "react";

function Header() {
  return (
    <header className="bg-blue-500">
      <nav className="flex items-center justify-between mx-auto py-4 px-8 max-w-screen-xl">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white font-medium hover:text-blue-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium hover:text-blue-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium hover:text-blue-200">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;