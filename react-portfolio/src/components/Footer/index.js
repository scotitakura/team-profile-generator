import React from "react";

function Footer() {
  return (
    <footer className="page-footer background-brown">
      <div className="row">
        <div className="center-align">
          <div className="col s2 offset-s4">
            <a
              className="waves-effect waves-light btn-floating social github"
              href="https://github.com/scotitakura"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
          <div className="col s2 ">
            <a
              className="waves-effect waves-light btn-floating social linkedin"
              href="https://www.linkedin.com/in/scot-itakura-289376157/"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
