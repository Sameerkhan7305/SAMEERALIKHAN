function Dashboard() {

  return <h2>Welcome to Dashboard</h2>;

}

function withAuthentication(WrappedComponent) {

  const isLoggedIn = true;

  return function AuthenticationComponent() {

    if (!isLoggedIn) {

      return <h2>Please Login First</h2>;

    }

    return <WrappedComponent />;

  };

}

const ProtectedDashboard = withAuthentication(Dashboard);

export default ProtectedDashboard;