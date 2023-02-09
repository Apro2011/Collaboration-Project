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
            const result =  await verifyToken({variables:{token}})
            const username = result.data.verifyToken.payload.username;
            setUser({username})
          } catch (error) {
            setUser(null);
            return;
          }
      };
  
      checkAuth();
    }, [router]);
  
    return user;
  }

  export default useAuth
