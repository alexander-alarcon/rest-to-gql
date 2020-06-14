import F1 from './datasource';

class SeasonsData extends F1 {
  constructor() {
    super();
  }

  async getSeasons() {
    return await this.get(
      'f1/seasons.json',
      {},
      {
        cacheOptions: { ttl: 60 },
      },
    );
  }
}

export default SeasonsData;
