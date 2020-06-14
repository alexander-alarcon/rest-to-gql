import { IResolvers } from 'graphql-tools';
import { urlParser } from '../utils/urlParser';

const type: IResolvers = {
  Season: {
    year(parent) {
      return parent.season;
    },

    urlMobile(parent) {
      return urlParser(parent.url);
    },
  },
};

export default type;
