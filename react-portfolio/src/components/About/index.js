import React from 'react';

function About() {
  const currentCategory = {
    name: "about me",
    description:
      "About me page",
  };
  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <p className="font-med">I am a Geotechnical Engineering Technician 
        &amp; Earth Science B.S. graduate from the University
        or California, Santa Cruz. I have recently finished UC 
        Berkeley's full stack web development bootcamp and am 
        looking to pivot into front-end web development. I am 
        eager to expand my experience in the web development 
        industry and contribute to the success of a company.</p>
      <div className="flex-row">
      </div>
    </section>
  );
}

export default About;