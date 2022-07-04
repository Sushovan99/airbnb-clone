require('dotenv').config();

import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';
import { typeDefs, resolvers } from './graphql';

const db = new PrismaClient();

const mount = async (app: Application) => {
  const PORT: string | undefined = process.env.PORT;
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  });
  await server.start();
  server.applyMiddleware({ app, path: '/api' });

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}/api`);
  });
};

mount(express());
