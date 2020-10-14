import React, { useState } from "react";
import Navigation from "./components/Navigation";
// import Header from './components/Header';
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [categories] = useState([
    { name: "about", description: "About me page" },
    { name: "portfolio", description: "Portfolio page" },
    { name: "contact", description: "Contact me" },
    { name: "resume", description: "Resume page" },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Navigation>
      <main>
        {currentCategory.name === "about" && <About />}
        {currentCategory.name === "portfolio" && <Portfolio />}
        {currentCategory.name === "contact" && <Contact />}
        {currentCategory.name === "resume" && <Resume />}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
