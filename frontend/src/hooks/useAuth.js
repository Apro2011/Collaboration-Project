import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { VERIFY_USER_MUTATION } from "../graphql/auth/user";

function useToken() {
  const [isLoading, setLoading] = useState(true);
  const [verifyToken] = useMutation(VERIFY_USER_MUTATION, {
    onCompleted: () => {
      setLoading(false);
    },
  });

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const result = await verifyToken({ variables: { token } });
          const username = result.data.verifyToken.payload.username;
          setUser({ username });
          setIsAuthenticated(true);
        } catch (error) {
          console.log(error);
          router.push("/sign-in");
          localStorage.clear();
          return;
        }
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  return { user, isLoading, isAuthenticated };
}

export default useToken;
