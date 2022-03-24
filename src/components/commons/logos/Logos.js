import { Link } from "react-router-dom"
import webDarkLogo from 'components/commons/images/dark-mode/logo.svg';
import webLightLogo from 'components/commons/images/light-mode/logo.svg';

import mobileDarkLogo from 'components/commons/images/dark-mode/logo.svg';
import mobileLightLogo from 'components/commons/images/light-mode/logo.svg';


const WebDarkLogo =() => {
  return(
    <Link to="/" className="dark-logo">
      <img src={webDarkLogo} alt="다크모드 웹 로고" />
    </Link>
  )
}

const WebLightLogo =() => {
  return(
    <Link to="/" className="light-logo">
      <img src={webLightLogo} alt="라이트모드 웹 로고" />
    </Link>
  )
}

const MobileDarkLogo = () => {
  return(
    <Link to="/">
      <img src={mobileDarkLogo} alt="다크모드 모바일 로고" />
    </Link>
  )
}

const MobileLightLogo = () => {
  return(
    <Link to="/">
      <img src={mobileLightLogo} alt="라이트모드 모바일 로고" />
    </Link>
  )
}


export {WebDarkLogo, WebLightLogo, MobileDarkLogo, MobileLightLogo};

