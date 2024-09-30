const {ApolloServer, gql} = require ('apollo-server');

const typeDefs = gql `
    type Book {
        title: String
        author: String
    }
    
    type Query {
        book: Book
    }
`;

const resolvers = {
    Query: {
        book: () => {
            return { 
                title: 'Yabancı', 
                author: 'Albert Camus' 
            };
        },
    },
};

const server = new ApolloServer ({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Apollo server is up at ${url}`));