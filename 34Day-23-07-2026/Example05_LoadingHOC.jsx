function UserList() {

  return <h2>Users Loaded Successfully</h2>;

}

function withLoading(WrappedComponent) {

  const loading = true;

  return function LoadingComponent() {

    if (loading) {

      return <h2>Loading...</h2>;

    }

    return <WrappedComponent />;

  };

}

const EnhancedUserList = withLoading(UserList);

export default EnhancedUserList;