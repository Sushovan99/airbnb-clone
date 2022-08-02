import { Box, Button, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { toggleCheckout } from '@store/feature/filterOptions';
import styles from '../../FilterOptions.module.css';

export const CheckOutFilter: React.FC = () => {
  const isCheckOutFilterActive: boolean = useAppSelector(
    (state) => state.filterSearch.checkOut.isActive
  );
  const dispatch = useAppDispatch();
  return (
    <Button
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '50px',
        paddingLeft: '20px',
        paddingY: '10px',
        height: '100%',
        textAlign: 'left',
        background: isCheckOutFilterActive ? 'white' : 'none',
        boxShadow: isCheckOutFilterActive ? 'var(--filter-box-shadow)' : 'none',
        '&:hover': {
          background: !isCheckOutFilterActive ? 'var(--border-color)' : 'white',
        },
      }}
      onClick={() => dispatch(toggleCheckout())}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          gap: '3px',
        }}
      >
        <h4 className={styles.header}>Check out</h4>
        <Typography
          variant="body1"
          sx={{ fontSize: '12px', color: 'var( --text-light-1)' }}
        >
          Add dates
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
    </Button>
  );
};
