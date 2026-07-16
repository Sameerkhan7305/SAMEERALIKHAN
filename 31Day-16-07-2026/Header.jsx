import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Header() {

  const theme = useContext(ThemeContext);

  return (
    <h1>Theme : {theme}</h1>
  );
}

export default Header;