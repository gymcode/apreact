import {
    ApolloProvider, 
    ApolloClient, 
    createHttpLink, 
    InMemoryCache
} from '@apollo/client'

const HttpLink = createHttpLink({
    uri: "http://localhost:5000/"
})

const client = new ApolloClient({
    link: HttpLink, 
    cache: InMemoryCache
})

export default (
    <ApolloProvider client={client}>

    </ApolloProvider>
)   