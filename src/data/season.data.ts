import F1 from './datasource';

class SeasonsData extends F1 {
  constructor() {
    super();
  }

  async getSeasons() {
    const data = await this.get(
      '/seasons.json',
      {},
      {
        cacheOptions: { ttl: 60 },
      },
    );

    return data?.MRData?.SeasonTable?.Seasons || [];
  }
}

export default SeasonsData;
