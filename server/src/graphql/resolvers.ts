import { listings } from '../listings';
import { GraphQLScalarType } from 'graphql';

export const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'A valid date value',
    serialize: (value) => value,
  }),

  Query: {
    listings: () => listings,
  },

  Mutation: {
    deleteListing: (
      _parent: unknown,
      { id }: { id: string },
      _context: unknown
    ) => {
      const findIndex = listings.findIndex((listing) => listing.id === id);
      if (findIndex === -1) {
        throw new Error('Listing not found');
      }
      const [deleteResult] = listings.splice(findIndex, 1);
      return deleteResult;
    },
  },
};
