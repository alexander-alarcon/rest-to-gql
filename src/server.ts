import dotenv from 'dotenv';
dotenv.config();

import express, { Application, Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import cors from 'cors';

import { datasources } from './data';
import schema from './schema';

const app: Application = express();
const { PORT = 3000, NODE_ENV = 'production' } = process.env;

app.use(cors());
app.use(compression());
app.get('/', (req: Request, res: Response) => res.redirect('/graphql'));
const server = new ApolloServer({
  schema,
  introspection: true,
  engine: {
    endpointUrl: '/graphql',
  },
  dataSources: () => {
    return {
      seasons: new datasources.SeasonsData(),
      races: new datasources.RaceData(),
      drivers: new datasources.DirverData(),
      standings: new datasources.StandingData(),
      circuits: new datasources.CircuitData(),
    };
  },
  debug: NODE_ENV === 'production' ? false : true,
});

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
