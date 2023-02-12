import Router from "next/router";

const checkAuth = async (verifyToken) => {
    //Check if token exists
    const token = localStorage.getItem("token");
    if (!token) {
        Router.push('/login');
      return;
    }

    //Check if token is valid
    try {
        const result =  await verifyToken({variables:{token}})
        const username = result.data.verifyToken.payload.username;
        setUser({username})
      } catch (error) {
        console.log(error);
        Router.push('/login');
        return;
      }
  };

  export default checkAuth

  // import checkAuth from '../utils/checkAuth'