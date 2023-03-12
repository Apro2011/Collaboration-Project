import Router from "next/router";

function logout() {
  localStorage.clear();
  Router.push("/sign-in");
}

export default logout;
