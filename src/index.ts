import express from "express";
import bodyParser from 'body-parser';
import { ApolloServer, gql } from "apollo-server-express";
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from './schema';
import resolvers from './resolvers';
import cors from 'cors';


const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}

const server = new ApolloServer({ schema });

const startServer = async () => {
  await server.start();
  const app = express();

  app.use(cors(corsOptions));
  app.use(bodyParser.json());


  server.applyMiddleware({ app, path: '/api' });


  app.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(`Server listening on localhost:4000${server.graphqlPath}`)
  )
}

startServer()
