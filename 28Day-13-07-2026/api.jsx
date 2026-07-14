import { createContext, useContext } from "react";

const NameContext = createContext();

function Child() {
  const name = useContext(NameContext);

  return <h2>Hello, {name}</h2>;
}

function App1() {
  return (
    <NameContext.Provider value="Sameer"> <Child /> </NameContext.Provider>
  );
}

export default App1;