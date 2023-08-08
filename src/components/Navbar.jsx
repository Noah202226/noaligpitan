import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between h-screen bg-gray-100 ">
      <div class="flex justify-center items-center h-40 bg-white shadow-md">
        <h1 class="text-2xl font-semibold">Your Logo</h1>
      </div>
      <div id="content" class="py-10 px-4">
        {/* <!-- Your page content --> */}
      </div>
      {/* Logo */}
      <div className="logo ">
        <img src="/vite.svg" alt="logo" />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Socials */}
      <ul className="flex items-center justify-between">
        <li>
          <a
            href="http://fb.com/noaligpitan26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/vite.svg" alt="fb" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/vite.svg" alt="fb" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/vite.svg" alt="fb" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/vite.svg" alt="fb" />
          </a>
        </li>
      </ul>

      <div
        id="headingNav"
        class="fixed top-0 left-0 w-full bg-white shadow-md opacity-0 pointer-events-none"
      >
        <div class="flex justify-center items-center h-16 px-4">
          <h1 class="text-2xl font-semibold">Your Logo</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
