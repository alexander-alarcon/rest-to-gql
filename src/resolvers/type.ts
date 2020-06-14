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

  Race: {
    name(parent) {
      return parent.raceName;
    },
    circuit(parent) {
      return parent.Circuit;
    },
    urlMobile(parent) {
      return urlParser(parent.url);
    },
  },

  Circuit: {
    id(parent) {
      return parent.circuitId;
    },
    name(parent) {
      return parent.circuitName;
    },
    location(parent) {
      return parent.Location;
    },
    urlMobile(parent) {
      return urlParser(parent.url);
    },
  },

  Location: {
    lng(parent) {
      return parent.long;
    },
  },
};

export default type;
