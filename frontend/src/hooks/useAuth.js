import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { VERIFY_USER_MUTATION } from '../graphql/auth/user';

function useAuth() {
    const [verifyToken, { data, loading, error }] = useMutation(VERIFY_USER_MUTATION);
    const [user, setUser] = useState(null);
    const router = useRouter();
  
    useEffect(() => {
      const checkAuth = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push('/login');
          return;
        }

        try {
            const result =  await mutateLogin({variables:values})
            console.log(result);
            // if (decodedToken.exp * 1000 <= Date.now()) {
            //   setUser(null);
            //   return;
            // }
          } catch (error) {
            setUser(null);
            return;
          }
  
        // // Example: Assume that the user is authenticated if the user id is greater than 0
        // const authenticatedUser = userId > 0 ? { id: userId, name: 'John Doe' } : null;
  
        // setUser(authenticatedUser);
  
        // if (!authenticatedUser) {
        //   router.push('/login');
        // }
      };
  
      checkAuth();
    }, [router]);
  
    return user;
  }

  export default useAuth
