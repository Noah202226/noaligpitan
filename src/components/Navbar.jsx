import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between bgre ">
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
    </div>
  );
};

export default Navbar;
