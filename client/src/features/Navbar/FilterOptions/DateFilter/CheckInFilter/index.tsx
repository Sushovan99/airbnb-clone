import { Button, Box, Typography } from '@mui/material';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { toggleCheckIn } from '@store/feature/filterOptions';
import styles from '../../FilterOptions.module.css';

export const CheckInFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const isCheckInFilterActive = useAppSelector(
    (state) => state.filterSearch.checkIn.isActive
  );

  const checkInDate = useAppSelector(
    (state) => state.filterSearch.checkIn.value
  );

  return (
    <Button
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '50px',
        paddingLeft: '20px',
        height: '100%',
        textAlign: 'left',
        transform: 'scaleY(1.03)',
        background: isCheckInFilterActive ? 'white' : 'none',
        boxShadow: isCheckInFilterActive ? 'var(--filter-box-shadow)' : 'none',
        '&:hover': {
          background: !isCheckInFilterActive ? 'var(--border-color)' : 'white',
        },
        '&:focus-visible': {
          outline: '2px solid black',
        },
      }}
      onClick={() => dispatch(toggleCheckIn())}
    >
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          gap: '3px',
        }}
      >
        <h4 className={styles.header}>Check in</h4>
        <Typography
          variant="h6"
          sx={{
            fontSize: '13px',
            fontWeight: checkInDate ? '500' : 'light',
            color: checkInDate ? 'var(--text-dark)' : 'var( --text-light-1)',
          }}
        >
          {checkInDate ? checkInDate : 'Add dates'}
        </Typography>
      </Box>
    </Button>
  );
};
