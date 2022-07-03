interface Listing {
  id: string;
  country: string;
  place: string;
  price: number;
  distance: number;
  rating: number;
  checkIn: Date;
  checkOut: Date;
  image: string;
}

export const listings: Listing[] = [
  {
    id: '001',
    country: 'Maldives',
    place: 'Raa Atoll',
    price: 3000,
    distance: 2631,
    rating: 0,
    checkIn: new Date(),
    checkOut: new Date(),
    image:
      'https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720',
  },
  {
    id: '002',
    country: 'Greece',
    place: 'Louta',
    price: 3500,
    distance: 4000,
    rating: 4.91,
    checkIn: new Date(),
    checkOut: new Date(),
    image:
      'https://a0.muscache.com/im/pictures/4e617803-3384-43d1-a9cc-5fb1255e826a.jpg?im_w=720',
  },
  {
    id: '003',
    country: 'India',
    place: 'Jaisamand',
    price: 2000,
    distance: 800,
    rating: 5,
    checkIn: new Date(),
    checkOut: new Date(),
    image:
      'https://a0.muscache.com/im/pictures/a0762de1-6047-40e7-be11-1c0aebfe190e.jpg?im_w=720',
  },
];
