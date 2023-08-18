import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo192.png";
import youtube from "./yt1.png";
import TwitterIcon from "./tw1.png";
import InstagramIcon from "./ig1.png";

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const Navbar = () => {
  return (
    <nav>
      <div className="mainNev">
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>

        <u1 className="nav-left">
          <li style={{ listStyle: "none" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement("about");
              }}
              style={{ textDecoration: "none", color: "white" }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#roadmap"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement("roadmap");
              }}
              style={{ textDecoration: "none", color: "white" }}
            >
              Roadmap
            </a>
          </li>
          <li>
            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement("blog");
              }}
              style={{ textDecoration: "none", color: "white" }}
            >
              Blog
            </a>
          </li>
        </u1>

        <div className="nav-right">
          <a href="https://discord.com/invite/QCjqu3KppW">
            <button>
              Head
              <br />
              Backstage!
            </button>
          </a>
        </div>
      </div>
      <div className="mainNev2">
        <div>
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="logo"
              style={{
                margin: "auto",
              }}
            />
          </a>
        </div>
        <div>
          <a href="https://discord.com/invite/QCjqu3KppW">
            <button>
              Head
              <br />
              Backstage!
            </button>
          </a>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <div className="ytTwLogoMain">
            <div>
              <a href="/">
                <img
                  src={youtube}
                  alt="yt1"
                  className="ytLogo"
                  style={{
                    margin: "auto",
                  }}
                />
              </a>
            </div>
            <div>
              <a href="/">
                <img src={TwitterIcon} alt="tw1" className="twLogo" />
              </a>
            </div>
          </div>
          <div className="textAlign">
            <a href="/">
              <img
                src={InstagramIcon}
                alt="ig1"
                className="igLogo"
                style={{
                  margin: "auto",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
