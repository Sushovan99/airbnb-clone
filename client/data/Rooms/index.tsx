interface IRoom {
  id: string;
  country: string;
  place: string;
  ratings: number;
  distance?: string;
  price: number;
  checkIn: Date;
  checkOut: Date;
  imageURL: string;
}

const checkIn = new Date();

export const rooms: IRoom[] = [
  {
    id: '001',
    country: 'Indonesia',
    place: 'Abiansemal',
    ratings: 4.67,
    distance: '4,322 Kilometres',
    price: 18702,
    checkIn: new Date(),
    checkOut: new Date(checkIn.setDate(checkIn.getDate() + 7)),
    imageURL:
      'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720',
  },
  {
    id: '002',
    country: 'South Korea',
    place: 'Sindun-myeon, Icheon-si',
    ratings: 4.87,
    distance: '4,093 Kilometres',
    price: 6113,
    checkIn: new Date(),
    checkOut: new Date(checkIn.setDate(checkIn.getDate() + 7)),
    imageURL:
      'https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720',
  },
  {
    id: '003',
    country: 'Thailand',
    place: 'Tambon Nong ',
    ratings: 4.95,
    distance: '1,661 Kilometres',
    price: 8664,
    checkIn: new Date(),
    checkOut: new Date(checkIn.setDate(checkIn.getDate() + 7)),
    imageURL:
      'https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg?im_w=720',
  },
  {
    id: '004',
    country: 'Finland',
    place: 'Pelkosenniemi',
    ratings: 4.81,
    distance: '6,470 Kilometres',
    price: 12911,
    checkIn: new Date(checkIn.setDate(checkIn.getDate() + 2)),
    checkOut: new Date(checkIn.setDate(checkIn.getDate() + 7)),
    imageURL:
      'https://a0.muscache.com/im/pictures/72e3dfea-2b90-4afe-a1bd-1be37e77539a.jpg?im_w=720',
  },
  {
    id: '005',
    country: 'Greece',
    place: 'Vothonas',
    ratings: 4.97,
    distance: '6,173 Kilometres',
    price: 24455,
    checkIn: new Date(checkIn.setDate(checkIn.getDate() + 2)),
    checkOut: new Date(checkIn.setDate(checkIn.getDate() + 10)),
    imageURL:
      'https://a0.muscache.com/im/pictures/miso/Hosting-49372736/original/439cbe6b-8e82-47ce-8900-c6a04e0685e5.jpeg?im_w=720',
  },
  {
    id: '006',
    country: 'India',
    place: 'Puducherry',
    ratings: 4.63,
    price: 7110,
    checkIn: new Date(),
    checkOut: new Date(checkIn.setDate(checkIn.getDate() + 12)),
    imageURL:
      'https://a0.muscache.com/im/pictures/miso/Hosting-577434974644673655/original/b45392b8-0b36-47c4-a159-331ab083f47b.jpeg?im_w=720',
  },
];
