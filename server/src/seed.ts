import { PrismaClient } from '@prisma/client';
import { listings } from './listings';

const db = new PrismaClient();

const seedListings = async () => {
  console.log('[seed]: Start...');
  await db.listings.createMany({
    data: listings,
  });
  console.log('[seed]: End...');
};

seedListings();
