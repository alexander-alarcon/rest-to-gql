import F1 from './datasource';
import { checkYear } from '../utils/numberCheck';

class StandingData extends F1 {
  constructor() {
    super();
  }

  async getDriversStandingByYear(year: string) {
    const validYear = checkYear(year);
    const data = await this.get(
      `/${validYear}/driverStandings.json`,
      {},
      {
        cacheOptions: { ttl: 60 },
      },
    );

    return (
      data?.MRData?.StandingsTable?.StandingsLists?.[0].DriverStandings || []
    );
  }
}

export default StandingData;
