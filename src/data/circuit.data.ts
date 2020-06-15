import F1 from './datasource';
import { checkYear } from '../utils/numberCheck';

class CircuitData extends F1 {
  constructor() {
    super();
  }

  async getCircuits(perPage: number, page: number) {
    const offset = (page - 1) * perPage;
    const data = await this.get(
      `/circuits.json?limit=${perPage}&offset=${offset}`,
      {},
      {
        cacheOptions: { ttl: 60 },
      },
    );

    return data?.MRData?.CircuitTable?.Circuits || [];
  }

  async getCircuitById(id: string) {
    const data = await this.get(
      `/circuits/${id}.json`,
      {},
      {
        cacheOptions: { ttl: 60 },
      },
    );

    return data?.MRData?.CircuitTable?.Circuits?.[0];
  }
}

export default CircuitData;
