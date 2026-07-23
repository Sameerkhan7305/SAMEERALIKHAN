function Dashboard() {

  return <h2>Welcome Admin Dashboard</h2>;

}

function withAuthorization(WrappedComponent) {

  const userRole = "Admin";

  return function AuthorizationComponent() {

    if (userRole !== "Admin") {

      return <h2>Access Denied</h2>;

    }

    return <WrappedComponent />;

  };

}

const ProtectedDashboard1 = withAuthorization(Dashboard);

export default ProtectedDashboard1;