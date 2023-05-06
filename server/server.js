const express = require('express');
const { ApolloServer } = require('apollo-server-express') //added
const path = require('path');
const { authMiddleware } = require('./utils/auth') //added

const { typeDefs, resolvers } = require('./schemas') //added
const db = require('./config/connection');
// const routes = require('./routes'); // remove later

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({ // added
  typeDefs,
  resolvers,
  context: authMiddleware
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => { //added
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// app.use(routes); // remove later

const startApolloServer = async () => { //added
  await server.start() //added
  server.applyMiddleware({ app }) //added

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`); //added
    });
  });
}

startApolloServer()

