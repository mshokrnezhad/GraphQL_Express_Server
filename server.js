const express = require("express");
const { buildSchema, graphql } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const schema = buildSchema(`
    type Query {
        description: String
        price: Float
    }
`);

const root = {
  description: "Red Shoe",
  price: 42.21,
};

const app = express();

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => {
  console.log("GraphQL is running on port 3000...");
});
