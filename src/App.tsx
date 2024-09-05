import { useEffect, useState } from "react";
import AccountList from "./1.AccountList/AccountList";
import { moonIcon, sunIcon } from "./icon";

function App() {
  const [theme, setTheme] = useState(() => {
    const getTheme = localStorage.getItem("theme") || "light";
    return getTheme;
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    // Save theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTimeout(() => {
      setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }, 300);
  };

  return (
    <div className="container mx-auto p-6">
      <button
        className="relative mx-auto -mt-6 block overflow-hidden p-6"
        onClick={toggleTheme}
      >
        <img
          src={sunIcon}
          alt=""
          className={`${theme === "light" ? "-translate-y-[44px]" : "-translate-y-1/2"} absolute left-1/2 top-1/2 -translate-x-1/2 transition-transform duration-300`}
        />
        <img
          src={moonIcon}
          alt=""
          className={`${theme === "dark" ? "translate-y-[44px]" : "-translate-y-1/2"} absolute left-1/2 top-1/2 -translate-x-1/2 transition-transform duration-300`}
        />
      </button>
      <AccountList />
    </div>
  );
}

export default App;
