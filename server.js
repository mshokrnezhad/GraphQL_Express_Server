const express = require("express");
const path = require("path");
/* const { buildSchema } = require("graphql"); */
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");
/* const PRODUCTS = require("./products/products.model");
const ORDERS = require("./orders/orders.model"); */

const typeDefArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

const schema = makeExecutableSchema({
  typeDefs: typeDefArray,
  resolvers: resolversArray,
});

/* const root = {
  products: PRODUCTS,
  orders: ORDERS,
}; */

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    //rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("GraphQL is running on port 3000...");
});
