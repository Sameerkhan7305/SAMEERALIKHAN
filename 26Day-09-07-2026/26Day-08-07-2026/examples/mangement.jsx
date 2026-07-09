import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserCard() {

  const { userName, setUserName } = useContext(UserContext);

  return (
    <div>
      <h2>User: {userName}</h2>

      <button onClick={() => setUserName("Sameer Ali Khan")}>
        Update Name
      </button>
    </div>
  );
}

function StateManagementDemo() {

  const [userName, setUserName] = useState("Sameer");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <UserCard />
    </UserContext.Provider>
  );
}

export default StateManagementDemo;