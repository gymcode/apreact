import {
    ApolloProvider, 
    ApolloClient, 
    createHttpLink, 
    InMemoryCache
} from '@apollo/client'; 
import App from "./App"

const HttpLink = createHttpLink({
    uri: "http://localhost:5000/"
})

const client = new ApolloClient({
    link: HttpLink, 
    cache: new InMemoryCache()
})

export default (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
)   