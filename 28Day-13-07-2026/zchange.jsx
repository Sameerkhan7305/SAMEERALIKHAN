import { useState } from "react";

function App7() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    if (theme === "light") {setTheme("dark"); } else {
      setTheme("light");
    }
  }

  return (
    <div className={theme}>
      <h1>Current Theme: {theme}</h1>

      <button onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default App7;