import { createContext, useContext } from "react";

const UserContext = createContext();

function Profile() {
  const userName = useContext(UserContext);

  return <h2>Hello, {userName}</h2>;
}

function App2() {
  return (
    <UserContext.Provider value="Sameer">
      <Profile />
    </UserContext.Provider>
  );
}

export default App2;