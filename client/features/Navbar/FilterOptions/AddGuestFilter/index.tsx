import { Box, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { toggleGuest } from '@store/feature/filterOptions';
import styles from '../FilterOptions.module.css';

export const AddGuestFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const isGuestFilterActive = useAppSelector(
    (state) => state.filterSearch.who.isActive
  );

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
        background: isGuestFilterActive ? 'white' : 'none',
        boxShadow: isGuestFilterActive ? 'var(--filter-box-shadow)' : 'none',
        '&:hover': {
          background: !isGuestFilterActive ? 'var(--border-color)' : 'white',
        },
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
          variant="body1"
          sx={{ fontSize: '12px', color: 'var( --text-light-1)' }}
        >
          Add Guests
        </Typography>
      </Box>
      <div role="button" aria-label="clear-input" className={styles.iconBtn}>
        <CloseIcon
          style={{
            fontSize: '24px',
            color: 'black',
            padding: '5px',
            borderRadius: '50%',
          }}
        />
      </div>
      <div role="button" className={styles.searchBtn}>
        <SearchIcon />
        <p>Search</p>
      </div>
    </Button>
  );
};
