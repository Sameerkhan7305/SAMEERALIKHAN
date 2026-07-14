import { createContext } from "react";

const UserContext = createContext();

function App4() {
  return (
    <UserContext.Provider value="Sameer">
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  return <h2>Profile Component</h2>;
}

export default App4;

