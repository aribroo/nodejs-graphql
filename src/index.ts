import { loadFilesSync } from "@graphql-tools/load-files";
import { ApolloServer } from "apollo-server-express";
import resolvers from "./schema/resolvers";
import express from "express";
import path from "path";

const port = process.env.APP_PORT || 3000;

const app = express();

const typeDefs = loadFilesSync(path.join(__dirname, "schema/schema.graphql"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
})()


app.listen(port, () => {
  console.log(
    `Server listening on http://localhost:${port}${server.graphqlPath}`
  );
});
