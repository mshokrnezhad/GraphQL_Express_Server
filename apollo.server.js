// copy this code to server.js and "npm start server.js"

const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const typeDefArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

async function startApolloServer(){
  const schema = makeExecutableSchema({
    typeDefs: typeDefArray,
    resolvers: resolversArray,
  });
  
  const app = express();
  
  const server = new ApolloServer({
    schema: schema
  });

  await server.start();
  server.applyMiddleware({app, path: "/graphql"});
  
  app.listen(3000, () => {
    console.log("GraphQL is running on port 3000...");
  });
};

startApolloServer();
