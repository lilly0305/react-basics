import React, { useState, useEffect } from "react";

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(false);
  const selectClassList = document.body.classList;
  
  const handleChange = () => {
    if (themeState) {
      localStorage.setItem("Theme", "dark");
      selectClassList.add("light-mode");
    } else {
      localStorage.setItem("Theme", "light");
      selectClassList.remove("light-mode");
    }
    let theme = localStorage.getItem("Theme");

    if(theme === "dark") {
      setThemeState(false);
    } else if (theme === "light"){
      setThemeState(true);
    } else {
      setThemeState(false);
    }
  };


  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");

    if (getTheme === "dark") {
      return selectClassList.remove("light-mode");

    } else if (getTheme === "light"){
      return selectClassList.add("light-mode");

    } else {
      return selectClassList.remove("light-mode");
    }
  });

  return (
    <div className={themeState ? "themeModeToggle light" : "themeModeToggle dark"} onClick={handleChange}>
      <button/>
    </div>
  );
};

export default ThemeChanger;
