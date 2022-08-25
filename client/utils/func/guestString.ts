export const guestStringFunc = (
  adult: number,
  children: number,
  infant: number,
  pets: number
): string | undefined => {
  let totalGuest = adult + children;
  const guestString = `${totalGuest} ${totalGuest === 1 ? 'guest' : 'guests'}`;
  const infantString = `${infant} ${infant === 1 ? 'infant' : 'infants'}`;
  const petString = `${pets} ${pets === 1 ? 'pet' : 'pets'}`;

  const fullString = `${totalGuest > 0 ? guestString : ''}${
    infant > 0 ? infantString.padStart(infantString.length + 2, ', ') : ''
  }${pets > 0 ? petString.padStart(petString.length + 2, ', ') : ''}`;
  return fullString;
};
