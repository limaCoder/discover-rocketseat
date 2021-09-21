const { ApolloServer, gql } = require('apollo-server');

// Toda request no graphql é POST
// Toda request bate no mesmo endpoint (/graphql)

// Query -> Obter informações (GET)
// Mutation -> Manipular dados (POST/PUT/PATCH/DELETE)
// Scalar Types (tipos primitivos do GraphQL) -> String, Int, Boolean, Float e ID

// criando um schema e dentro dela uma Query e os tipos dela (Scalar Type)
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// mapeando o objeto criado em typeDefs e resolvendo a query criada atribuindo 
// uma função a ela
const resolvers = {
  Query: {
    hello: () => 'Hello world'
  }
};

// instanciando o servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });
// startando o servidor
server.listen().then(({ url }) => console.log(`Server started at ${url}`));