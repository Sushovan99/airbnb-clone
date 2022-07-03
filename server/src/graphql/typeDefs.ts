import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  scalar Date

  type Query {
    listings: [Listing!]!
  }

  type Mutation {
    deleteListing(id: ID!): Listing
  }

  type Listing {
    id: ID!
    country: String!
    place: String!
    price: Int!
    distance: Int!
    rating: Float!
    checkIn: Date!
    checkOut: Date!
    image: String!
  }
`;
