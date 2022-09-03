export const ROOMS = `
  query Rooms {
  listings {
    id
    country
    place
    rating
    checkIn
    checkOut
    distance
    price
  }
}`;

export const getRooms = async () => {
  const response = await fetch('http://localhost:8000/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: ROOMS,
    }),
  });
  const { data } = await response.json();
  return data;
};
