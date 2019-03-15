const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import')
const typeDefs = importSchema('./src/types.graphql')
const fetch = require('node-fetch')

const PETSTORE_URL = 'https://petstore.swagger.io/v2'

const headers = {
  "Content-Type": "application/json",
}
const resolvers = {
  Mutation: {
    loginUser: ( parent, args ) => {
      const { username, password } = args 
      return fetch(`${PETSTORE_URL}/user/login?username=${username}&password=${password}`, {
        method: 'GET',
      }).then( res => res.text())
      .catch(error => console.error('Error:', error))
      .then(response => response)
    },
    createUser: ( parent, { body }) => {
      return fetch(`${PETSTORE_URL}/user`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers
      }).then( res => res)
      .catch(error => console.error('Error:', error))
      .then(response => ({ data: { loginUser: response }}));
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers, formatError: error => {
  console.log(error);
  return new Error('Internal server error');
}, });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});