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

  Driver: {
    id(parent) {
      return parent.driverId;
    },
    name(parent) {
      return `${parent.givenName} ${parent.familyName}`;
    },
    urlMobile(parent) {
      return urlParser(parent.url);
    },
  },

  DriverStanding: {
    driver(parent) {
      return parent.Driver;
    },
    constructors(parent) {
      return parent.Constructors;
    },
  },

  Constructor: {
    id(parent) {
      return parent.constructorId;
    },
    urlMobile(parent) {
      return urlParser(parent.url);
    },
  },
};

export default type;
