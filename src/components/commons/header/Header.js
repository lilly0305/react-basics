import { Desktop, Mobile, Tablet } from "components/commons/mediaquery/MediaQuery";

import { Link } from "react-router-dom";
import { MobileDarkLogo, WebDarkLogo, WebLightLogo } from "../logos/Logos";

// remix icon
import 'remixicon/fonts/remixicon.css';
import 'components/commons/scss/header.scss';
import { useEffect } from "react";
import DarkModeToggle from "../dark-mode/DarkModeToggle";

export const Header = () => {
  useEffect(() => {
    const bgMode = window.localStorage.getItem("bgMode");
    if (bgMode === "dark") {
      document.getElementsByTagName("html")[0].classList.add("ui-dark");
    }
  }, []);

  const navList = [
    {
      name: "Demos",
      link: "/demos",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    }
  ]

  return (
    <>
      <Desktop>
        <header className="web-header">
          <div className="header-wrap">
            <WebDarkLogo/>
            <WebLightLogo/>
            <nav className="web-nav">
            {
              navList.map((nav) => (
                <Link to={nav.link}>{nav.name}</Link>
              ))
            }

            </nav>
  
            <Link to="/login" className="login-icon">
              <i className="ri-user-shared-line"></i>
            </Link>

            <DarkModeToggle />
          </div>
        </header>
      </Desktop>
  
      <Tablet>
        <header>
          <MobileDarkLogo />
        </header>
      </Tablet>

      <Mobile>
        <header>
          <MobileDarkLogo />
        </header>
      </Mobile>
    </>
  )
}