function Example04_SwitchCase() {

  const userRole = "Admin";

  switch (userRole) {

    case "Admin":
      return <h1>Welcome Admin</h1>;

    case "User":
      return <h1>Welcome User</h1>;

    case "Guest":
      return <h1>Welcome Guest</h1>;

    default:
      return <h1>Invalid User</h1>;

  }

}

export default Example04_SwitchCase;