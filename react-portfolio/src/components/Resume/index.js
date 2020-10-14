import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Resume() {
  const currentCategory = { name: "resume", description: "Resume page" };
  return (
    <section className="container">
      <h2>{capitalizeFirstLetter(currentCategory.name)}</h2>
      <div>
        <h4>Work Experience</h4>
        <div className="container">
          <div className="row">
            <h5 className="col">Berkeley Coding Bootcamp</h5>
            <p className="right-align col">(June-Oct 2020)</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h5 className="col">University of California, Santa Cruz</h5>
            <p className="right-align col">(2014-2018)</p>
          </div>
          <li>Earth Science, Bachelor of Science</li>
        </div>
        <ul className="font-med">
          Front-End Technical Skills
          <li>
            <ul className="browser-default">
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>React</li>
              <li>Handlebars</li>
            </ul>
          </li>
          Bachelor of Science Coding Programs
          <li>
            <ul className="browser-default">
              <li>MATLAB</li>
              <li>Python</li>
              <li>Scipy</li>
              <li>GIS (ArcGIS)</li>
              <li>Microsoft Excel</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
