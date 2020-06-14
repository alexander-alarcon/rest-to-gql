import F1 from './datasource';
import { checkYear, checkRound } from '../utils/numberCheck';

class DirverData extends F1 {
  constructor() {
    super();
  }

  async getDrivers(perPage: number, page: number) {
    const offset = (page - 1) * perPage;
    const data = await this.get(
      `/drivers.json?limit=${perPage}&offset=${offset}`,
      {},
      {
        cacheOptions: { ttl: 60 },
      },
    );

    return data?.MRData?.DriverTable?.Drivers || [];
  }

  async getDriversByYear(year: string) {
    const validYear = checkYear(year);

    const data = await this.get(
      `/${validYear}/drivers.json`,
      {},
      {
        cacheOptions: { ttl: 60 },
      },
    );

    return data?.MRData?.DriverTable?.Drivers || [];
  }

  async getDriversByYearAndRound(year: string, round: number) {
    const validYear = checkYear(year);
    const validRound = checkRound(round);

    const data = await this.get(
      `/${validYear}/${validRound}/drivers.json`,
      {},
      {
        cacheOptions: { ttl: 60 },
      },
    );

    return data?.MRData?.DriverTable?.Drivers || [];
  }

  async getDriversById(id: string) {
    const data = await this.get(
      `/drivers/${id}.json`,
      {},
      {
        cacheOptions: { ttl: 60 },
      },
    );

    return data?.MRData?.DriverTable?.Drivers[0];
  }
}

export default DirverData;
