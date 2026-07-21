import { useState } from "react";

function Example05_ShowHide() {

  const [showProfile, setShowProfile] = useState(false);

  function handleProfile() {

    setShowProfile(!showProfile);

  }

  return (

    <>

      <button onClick={handleProfile}>

        {showProfile ? "Hide Profile" : "Show Profile"}

      </button>

      <hr />

      {

        showProfile && (

          <>

            <h2>Name : Sameer</h2>

            <h2>Role : Web Devloper </h2>

            <h2>City : Bangalore</h2>

          </>

        )

      }

    </>

  );

}

export default Example05_ShowHide;