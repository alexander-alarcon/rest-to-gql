import { IResolvers } from 'graphql-tools';
import { ApolloError } from 'apollo-server-express';

const query: IResolvers = {
  Query: {
    async seasonList(_, __, { dataSources }) {
      const data = await dataSources.seasons.getSeasons();

      return data.MRData.SeasonTable.Seasons;
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
  },
};

export default query;
