import { RESTDataSource } from 'apollo-datasource-rest';

class F1 extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://ergast.com/api/f1';
  }
}

export default F1;
