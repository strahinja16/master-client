import ApolloClient, { InMemoryCache } from 'apollo-boost';

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://mini-mes.digital/services/api-gateway/graphql',
    request: (operation) => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    }
});

