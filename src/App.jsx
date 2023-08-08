import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  const [count, setCount] = useState(0);

  const headingNav = document.getElementById("headingNav");
  const content = document.getElementById("content");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      headingNav.style.opacity = "1";
      headingNav.style.pointerEvents = "auto";
    } else {
      headingNav.style.opacity = "0";
      headingNav.style.pointerEvents = "none";
    }
  });

  // Adjust content padding to prevent overlap with fixed header
  window.addEventListener("resize", () => {
    const headerHeight = document.querySelector(
      ".bg-white.shadow-md"
    ).offsetHeight;
    content.style.paddingTop = `${headerHeight}px`;
  });

  return (
    <div className="">
      <nav className="p-3">
        <Navbar />
      </nav>

      <Skills />

      <Projects />

      <ContactForm />

      <div className="bg-red-600 p-3">
        <Footer />
      </div>
    </div>
  );
}

export default App;
