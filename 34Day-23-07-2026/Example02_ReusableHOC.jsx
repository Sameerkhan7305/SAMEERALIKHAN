function Welcome() {

  return <h2>Welcome Component</h2>;

}

function Profile() {

  return <h2>Profile Component</h2>;

}

function Dashboard() {

  return <h2>Dashboard Component</h2>;

}

function withMessage(WrappedComponent) {

  return function EnhancedComponent() {

    return (

      <>

        <h1>React HOC Example</h1>

        <WrappedComponent />

      </>

    );

  };

}

const EnhancedWelcome = withMessage(Welcome);

const EnhancedProfile = withMessage(Profile);

const EnhancedDashboard = withMessage(Dashboard);

function Example02_ReusableHOC() {

  return (

    <>

      <EnhancedWelcome />

      <hr />

      <EnhancedProfile />

      <hr />

      <EnhancedDashboard />

    </>

  );

}

export default Example02_ReusableHOC;