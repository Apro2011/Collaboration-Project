import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  from,
  HttpLink,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    new ApolloLink((operation, forward) => {
      operation.setContext(({ headers = {} }) => ({
        uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,

        headers: {
          ...headers,
          authorization: localStorage.getItem("token")
            ? `JWT ${localStorage.getItem("token")}`
            : "",
        },
      }));
      return forward(operation);
    }),
    new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT }),
  ]),
});

export default client;
