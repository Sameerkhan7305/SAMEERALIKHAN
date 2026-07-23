function Welcome() {

  return <h2>Welcome to React</h2>;

}

function withMessage(WrappedComponent) {

  return function EnhancedComponent() {

    return (

      <>

        <h1>Higher Order Component Example</h1>

        <WrappedComponent />

      </>

    );

  };

}

const EnhancedWelcome = withMessage(Welcome);

export default EnhancedWelcome;