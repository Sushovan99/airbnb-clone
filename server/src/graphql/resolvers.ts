import { Listings } from '@prisma/client';
import { GraphQLScalarType } from 'graphql';
import { DBType } from '../lib';

export const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'A valid date value',
    serialize: (value) => value,
  }),

  Query: {
    listings: async (
      _parent: unknown,
      _args: unknown,
      { db }: DBType
    ): Promise<Listings[]> => {
      const listings = await db.listings.findMany();
      if (!listings.length) {
        throw new Error('No listings found');
      }
      return listings;
    },
  },

  Mutation: {
    deleteListing: async (
      _parent: unknown,
      { id }: { id: string },
      { db }: DBType
    ): Promise<Listings> => {
      const deletedListing = await db.listings.delete({
        where: {
          id,
        },
      });

      if (!deletedListing) {
        throw new Error('Cannot delete Listing');
      }

      return deletedListing;
    },
  },
};
