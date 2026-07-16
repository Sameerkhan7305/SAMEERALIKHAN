import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeText() {

  const theme = useContext(ThemeContext);

  return <h1>{theme}</h1>;
}

export default ThemeText;