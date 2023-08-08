import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <nav className="bg-red-800 p-3">
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
