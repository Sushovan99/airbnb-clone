import { Button, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { toggleCheckIn } from '@store/feature/filterOptions';
import styles from '../../FilterOptions.module.css';

export const CheckInFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const isCheckInFilterActive = useAppSelector(
    (state) => state.filterSearch.checkIn.isActive
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
        boxShadow: isCheckInFilterActive ? 'var(--filter-box-shadow)' : 'none',
        '&:hover': {
          background: isCheckInFilterActive ? 'none' : 'var(--border-color)',
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
          variant="body1"
          sx={{ fontSize: '12px', color: 'var( --text-light-1)' }}
        >
          Add dates
        </Typography>
      </Box>

      <IconButton
        aria-label="clear-input"
        sx={{
          height: 'auto',
          width: 'auto',
          padding: 0,
          marginRight: '8px',
          background: 'var(--background-1)',
          '&:hover': {
            background: 'var(--btn-variant-2)',
          },
        }}
      >
        <CloseIcon
          style={{
            fontSize: '24px',
            color: 'black',
            padding: '5px',
            borderRadius: '50%',
          }}
        />
      </IconButton>
    </Button>
  );
};
