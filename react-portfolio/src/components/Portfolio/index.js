import React from "react";
import qualitrees from "../../assets/images/QualitreesPreview.PNG";
import cosmo from "../../assets/images/CosmopolitianTastes-img.PNG";
import craver from "../../assets/images/The-Craver.PNG";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio() {
  const currentCategory = {
    name: "portfolio",
    description: "Portfolio page",
  };
  return (
    <section className="container">
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>A collection of my past and current projects.</p>
      <div className="flex-row">
        <h3>Qualitrees</h3>
        <p>Freelance Project</p>
        <img src={qualitrees} alt="Qualitrees Web Page" />
        <br></br>
        <h3>The Craver</h3>
        <p>Class Group Project</p>
        <img src={craver} alt="Craver Web Page" />
        <br></br>
        <h3>CosmopolitianTastes</h3>
        <p>Class Group Project</p>
        <img src={cosmo} alt="ComsopolitianTastes Web Page" />
      </div>
    </section>
  );
}

export default Portfolio;
