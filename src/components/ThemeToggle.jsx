import { useEffect, useState } from "react";


function ThemeToggle() {


  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );



  useEffect(() => {

    document.body.className = theme;

    localStorage.setItem(
      "theme",
      theme
    );

  }, [theme]);




  const changeTheme = () => {

    setTheme(
      theme === "light"
      ? "dark"
      : "light"
    );

  };



  return (

    <section>

      <h2>
        Theme Settings
      </h2>


      <button onClick={changeTheme}>

        Change to {theme === "light" ? "Dark" : "Light"} Mode

      </button>


    </section>

  );

}


export default ThemeToggle;