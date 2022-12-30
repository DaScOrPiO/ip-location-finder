import React from "react";

export default function Footer() {
  return (
    <footer className="d-flex flex-column align-items-center justify-content-center">
      <div className="footer container-fluid d-flex flex-column justify-content-center align-items-center">
        <div className="some-details container d-flex flex-column justify-content-center align-items-center mt-5">
          <h1>IP Address Tracker</h1>
          <p>
            Ip address tracker is an application that helps track the location
            of a given Ip address or domain
          </p>
        </div>

        <div className="logo-container d-flex">
          <a href="mailto:dunni82@yahoo.com" className="link">
            <img src={require("../images/email.png")} alt="" />
          </a>
          <a href="https://github.com/DaScOrPiO" className="link">
            <img src={require("../images/github.png")} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/faith-oladunni-54ab8920b/"
            className="link"
          >
            <img src={require("../images/linkedin.png")} alt="" />
          </a>
          <a href="https://www.twitter.com/oladunni_faith/" className="link">
            <img src={require("../images/twitter.png")} alt="" />
          </a>
        </div>
        <div className=" d-flex mt-3">
          <article>
            This project was created by DaScOrPiO, courtsey of FrontendMentor.io{" "}
            <hr />{" "}
            <span className="d-flex align-iten-center justify-content-center text-center">
              &copy; 2022{" "}
            </span>
          </article>
        </div>
      </div>
    </footer>
  );
}
