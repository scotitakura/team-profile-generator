import React, { useState, useEffect } from "react";

function Contact() {
  const [btnClass, setBtnClass] = useState("btn disabled");
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [contents,setContents] = useState('');

  const handleClick = () => {
    console.log('SUBMITTING');
  }

  useEffect(() => {
    console.log("is rerendering",name)
    if(
      name &&
      email && 
      contents
    ) {
      setBtnClass('btn')
    } else {
      setBtnClass('btn disabled')
    }
  }, [name])

  const currentCategory = {
    name: "contact me",
    description: "Contact me page",
  };

  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="name"
            value={name}
            type="text"
            className="validate"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field col s12">
          <input id="email" value={email} type="email" className="validate" required onChange={e => setEmail(e.target.value)}/>
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field col s12">
          <textarea id="textarea1" value={contents} className="materialize-textarea validate" required onChange={e => setContents(e.target.value)}/>
          <label htmlFor="textarea1">Contents</label>
        </div>
      </div>
      <a className={btnClass} onClick={() => handleClick()}>Button</a>
    </section>
  );
}

export default Contact;
