import { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {

    const user = useContext(UserContext);

    return (
        <>
            <h1>Name : {user.name}</h1>
            <h2>City : {user.city}</h2>
        </>
    );
}

export default UserProfile;