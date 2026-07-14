import { createContext, useContext, useState } from "react";

// 1. Create Context
const AuthContext = createContext();

function App() {
 // 2. Global state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 // 3. Login function
  function login() {
    setIsLoggedIn(true);
  }

  // 4. Logout function
  function logout() {
    setIsLoggedIn(false);
  }

  return (
    // 5. Provider provides data globally
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Navbar />
      <Profile />
    </AuthContext.Provider>
  );
}

function Navbar() {
  // 6. Consume global authentication data
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Navbar</h2>

      {isLoggedIn && <button onClick={logout}>Logout</button>}
    </div>
  );
}

function Profile() {
  // 7. Consume global authentication data
  const { isLoggedIn, login } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome Sameer! You are logged in.</h1>
      ) : (
        <>
          <h1>Please login first</h1>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
}

export default App;