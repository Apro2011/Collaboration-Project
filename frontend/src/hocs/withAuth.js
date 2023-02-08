import useAuth from "../hooks/useAuth";

const withAuth = WrappedComponent => {
    return function WithAuth(props) {
      const authenticated = useAuth();
  
      if (!authenticated) {
        return null;
      }
  
      return <WrappedComponent {...props} />;
    };
  };
  
  export default withAuth;
