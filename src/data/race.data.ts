import F1 from './datasource';
import { checkYear, checkRound } from '../utils/numberCheck';

class RaceData extends F1 {
  constructor() {
    super();
  }

  async getYear(year: string) {
    const validYear = checkYear(year);
    const data = await this.get(
      `/${validYear}.json`,
      {},
      {
        cacheOptions: { ttl: 60 },
      },
    );
    return data?.MRData?.RaceTable?.Races || [];
  }

  async getRoundByYear(year: string, round: number) {
    const validYear = checkYear(year);
    const validRound = checkRound(round);
    const path = `/${validYear}/${validRound}.json`;
    const data = await this.get(
      path,
      {},
      {
        cacheOptions: { ttl: 60 },
      },
    );

    return data?.MRData?.RaceTable?.Races[0];
  }
}

export default RaceData;
