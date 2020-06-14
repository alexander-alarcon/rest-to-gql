import F1 from './datasource';

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
}

export default DirverData;
