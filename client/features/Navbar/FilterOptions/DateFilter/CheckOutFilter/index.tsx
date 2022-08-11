import { Box, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { toggleCheckout } from '@store/feature/filterOptions';
import styles from '../../FilterOptions.module.css';

export const CheckOutFilter: React.FC = () => {
  const dispatch = useAppDispatch();

  const isCheckOutFilterActive: boolean = useAppSelector(
    (state) => state.filterSearch.checkOut.isActive
  );

  const checkOutDate = useAppSelector(
    (state) => state.filterSearch.checkOut.value
  );

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
        transform: 'scaleY(1.03)',
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
          variant="h6"
          sx={{
            fontSize: '13px',
            fontWeight: checkOutDate ? '500' : 'light',
            color: checkOutDate ? 'var(--text-dark)' : 'var( --text-light-1)',
          }}
        >
          {checkOutDate ? checkOutDate : 'Add dates'}
        </Typography>
      </Box>
    </Button>
  );
};
