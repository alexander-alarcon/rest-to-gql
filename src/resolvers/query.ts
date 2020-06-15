import { ApolloError } from 'apollo-server-express';
import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
  Query: {
    async seasonList(_, __, { dataSources }) {
      const data = await dataSources.seasons.getSeasons();

      return data;
    },

    async raceByYear(_, { year }: { year: string }, { dataSources }) {
      const data = await dataSources.races.getYear(year);
      return data;
    },

    async roundByYear(
      _,
      { year, round }: { year: string; round: number },
      { dataSources },
    ) {
      const data = await dataSources.races.getRoundByYear(year, round);
      if (!data) {
        throw new ApolloError(
          `Round ${10} of year ${year}, was not found`,
          'NOT FOUND',
        );
      }
      return data;
    },

    async drivers(
      _,
      { perPage = 10, page = 1 }: { perPage: number; page: number },
      { dataSources },
    ) {
      const data = await dataSources.drivers.getDrivers(perPage, page);

      return data;
    },

    async driversByYear(_, { year }: { year: string }, { dataSources }) {
      const data = await dataSources.drivers.getDriversByYear(year);
      return data;
    },

    async driversByYearAndRound(
      _,
      { year, round }: { year: string; round: number },
      { dataSources },
    ) {
      const data = await dataSources.drivers.getDriversByYear(year, round);
      return data;
    },

    async driversById(_, { id }: { id: string }, { dataSources }) {
      const data = await dataSources.drivers.getDriversById(id);
      if (!data) {
        throw new ApolloError(`Driver with ${id}, was not found`, 'NOT FOUND');
      }
      return data;
    },

    async driversStandingsByYear(
      _,
      { year }: { year: string },
      { dataSources },
    ) {
      const data = await dataSources.standings.getDriversStandingByYear(year);

      return data;
    },

    async circuits(
      _,
      { perPage = 10, page = 1 }: { perPage: number; page: number },
      { dataSources },
    ) {
      const data = await dataSources.circuits.getCircuits(perPage, page);

      return data;
    },
  },
};

export default query;
