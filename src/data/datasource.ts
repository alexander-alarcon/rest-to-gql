import { RESTDataSource } from 'apollo-datasource-rest';

class F1 extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://ergast.com/api/';
  }
}

export default F1;
