import { createContext, useContext } from "react";

// Step 1: Create Context
const UserContext = createContext();

// Child Component
function UserProfile() {

  // Step 3: Consume Context Data
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>

      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
      <p>City: {user.city}</p>
    </div>
  );
}

// Main Component
function Example_ContextAPI() {

  const userData = {
    name: "Sameer",
    role: "Web Developer",
    city: "Bangalore"
  };

  return (
    <div>
      <h1>Context API Example</h1>

      {/* Step 2: Provide Context Data */}
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>

    </div>
  );
}

export default Example_ContextAPI;