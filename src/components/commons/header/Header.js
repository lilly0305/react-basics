import { Desktop, Mobile, Tablet } from "components/commons/mediaquery/MediaQuery";

import { Link } from "react-router-dom";
import { MobileDarkLogo, WebDarkLogo } from "../logos/Logos";

// remix icon
import 'remixicon/fonts/remixicon.css';
import 'components/commons/scss/header.scss';

export const Header = () => {

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
            <WebDarkLogo />
  
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