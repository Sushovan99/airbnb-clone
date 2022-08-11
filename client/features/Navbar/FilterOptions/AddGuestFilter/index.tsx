import { Box, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { toggleGuest, resetGuestFilter } from '@store/feature/filterOptions';
import styles from '../FilterOptions.module.css';

export const AddGuestFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const isGuestFilterActive = useAppSelector(
    (state) => state.filterSearch.who.isActive
  );

  const isResetStateRan = useAppSelector(
    (state) => state.filterSearch.resetStateRan
  );

  const adult = useAppSelector((state) => state.filterSearch.who.adult.value);

  const children = useAppSelector(
    (state) => state.filterSearch.who.children.value
  );

  const infant = useAppSelector((state) => state.filterSearch.who.infant.value);

  const pet = useAppSelector((state) => state.filterSearch.who.pets.value);

  const guestStringFunc = (): string | undefined => {
    let totalGuest = adult + children;

    if (!totalGuest && !pet && !infant) {
      return 'Add guests';
    }

    const guestString = `${totalGuest} ${
      totalGuest === 1 ? 'guest' : 'guests'
    }`;

    const infantString = `${infant} ${infant === 1 ? 'infant' : 'infants'}`;
    const petString = `${pet} ${pet === 1 ? 'pet' : 'pets'}`;

    const fullString = `${totalGuest > 0 ? guestString : ''}${
      infant > 0 ? infantString.padStart(infantString.length + 2, ', ') : ''
    }${pet > 0 ? petString.padStart(petString.length + 2, ', ') : ''}`;

    return fullString;
  };

  const guestString = guestStringFunc();

  return (
    <Button
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '50px',
        paddingLeft: '20px',
        paddingRight: '8px',
        height: '100%',
        textAlign: 'left',
        transform: 'scale(1.02, 1.03)',
        marginLeft: '2px',
        background: isGuestFilterActive ? 'white' : 'none',
        boxShadow: isGuestFilterActive ? 'var(--filter-box-shadow)' : 'none',
        '&:hover': {
          background: !isGuestFilterActive ? 'var(--border-color)' : 'white',
        },
        '&:focus-visible': {
          outline: '2px solid black',
        },
        position: 'relative',
      }}
      onClick={() => dispatch(toggleGuest())}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          gap: '3px',
        }}
      >
        <h4 className={styles.header}>Who</h4>
        <Typography
          variant="h6"
          sx={{
            fontSize: '13px',
            color:
              guestString?.length !== 10
                ? 'var( --text-dark)'
                : 'var(--text-light-1)',
            fontWeight: guestString?.length === 10 ? 'light' : '',
          }}
        >
          {isGuestFilterActive && guestString?.length && guestString.length > 10
            ? `${guestString?.substring(12, 0)}...`
            : guestString}
        </Typography>
      </Box>

      {isGuestFilterActive &&
      guestString?.length &&
      guestString.length !== 10 ? (
        <div
          role="button"
          aria-label="clear-input"
          className={styles.iconBtn}
          onClick={() => dispatch(resetGuestFilter())}
        >
          <CloseIcon
            style={{
              fontSize: '24px',
              color: 'black',
              padding: '5px',
              borderRadius: '50%',
            }}
          />
        </div>
      ) : null}

      <div
        role="button"
        className={styles.searchBtn}
        style={{
          padding: isResetStateRan ? '10px' : '10px 15px',
          transition: 'padding ease 0.4s ',
        }}
      >
        <SearchIcon />
        {isResetStateRan ? null : <p>Search</p>}
      </div>
    </Button>
  );
};
