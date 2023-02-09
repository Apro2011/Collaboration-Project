import useAuth from "../hooks/useAuth";

const withAuth = WrappedComponent => {
    return function WithAuth(props) {
      const user = useAuth();

      console.log('user',user);
    
      if (!user) {
        return null;
      }
  
      return <WrappedComponent {...props} />;
    };
  };
  
  export default withAuth;
