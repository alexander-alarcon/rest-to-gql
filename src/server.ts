import express, { Application, Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import cors from 'cors';

import { datasources } from './data';
import schema from './schema';

const app: Application = express();

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
    };
  },
});

server.applyMiddleware({ app });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
