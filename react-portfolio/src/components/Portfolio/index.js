import React from 'react';
import qualitrees from '../../assets/images/QualitreesPreview.PNG';
import cosmo from '../../assets/images/CosmopolitianTastes-img.PNG';
import craver from '../../assets/images/The-Craver.PNG';


function Portfolio() {
  const currentCategory = {
    name: "portfolio",
    description:
      "Portfolio page",
  };
  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
        <h3>Qualitrees</h3>
        <p>Freelance Project</p>
        <img src={qualitrees} alt="Qualitrees Web Page"/>
        <br></br>
        <h3>The Craver</h3>
        <p>Class Group Project</p>
        <img src={craver} alt="Craver Web Page"/>
        <br></br>
        <h3>CosmopolitianTastes</h3>
        <p>Class Group Project</p>
        <img src={cosmo} alt="ComsopolitianTastes Web Page"/>
      </div>
      
    </section>
  );
}

export default Portfolio;