import { useEffect, useState } from "react";

function Users() {
  return <h2>Users Data Loaded Successfully</h2>;
}


function withLoading(WrappedComponent) {

  return function LoadingComponent() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

      setTimeout(() => {

        setLoading(false);

      }, 3000);

    }, []);

    if (loading) {

      return <h2>🔄 Loading...</h2>;

    }

    return <WrappedComponent />;

  };

}


const EnhancedUsers = withLoading(Users);

export default EnhancedUsers;