import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useRouter } from 'next/router';

const withAuth = WrappedComponent => {
    return function WithAuth(props) {
      const router = useRouter();
      const {user,isLoading,isAuthenticated} = useAuth();
      console.log(isLoading,isAuthenticated);

      useEffect(()=>{

        if(isLoading){
            return
        }
        if(isAuthenticated){
          router.push('/')
        }else{
          router.push('/sign-in ')
        }
        
      },[isLoading , isAuthenticated])

      if (isLoading) {
        return null
      }
    
      if (!user) {
        return null;
      }
  
      return <WrappedComponent {...props} />;
    };
  };
  
  export default withAuth;
