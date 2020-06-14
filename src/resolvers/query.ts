import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
  Query: {
    async seasonList(_, __, { dataSources }) {
      const data = await dataSources.seasons.getSeasons();

      return data.MRData.SeasonTable.Seasons;
    },
  },
};

export default query;
