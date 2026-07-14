import { createContext } from "react";

const UserContext = createContext();

function Profile() {
  return (
    <UserContext.Consumer>
      {(userName) => {
        return <h2>Hello, {userName}</h2>;
      }}
    </UserContext.Consumer>
  );
}

function App5() {
  return (
    <UserContext.Provider value="Sameer">
      <Profile />
    </UserContext.Provider>
  );
}

export default App5;