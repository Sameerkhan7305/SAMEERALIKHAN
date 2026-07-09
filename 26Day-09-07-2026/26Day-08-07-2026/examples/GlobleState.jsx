import { useState } from "react";

function Navbar({ userName }) {
  return <h2>Profile name: {userName}</h2>;
}

function Profile({ userName }) {
  return <h2> My Full Name : {userName}</h2>;
}

function GlobalStateExample() {

  const [userName, setUserName] = useState("Sameer");

  return (
    <div>
      <Navbar userName={userName} />

      <Profile userName={userName} />

      <button onClick={() => setUserName("Sameer Ali Khan")}>
        Update Name
      </button>
    </div>
  );
}

export default GlobalStateExample;