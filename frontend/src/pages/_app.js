import '../styles/globals.css'
import client from "../lib/clients/graphqlRequestClient"
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }) {

  return <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
}

export default MyApp
