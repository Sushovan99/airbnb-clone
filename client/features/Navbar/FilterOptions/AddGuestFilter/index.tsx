import { Box, Button, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../FilterOptions.module.css';

export const AddGuestFilter: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '50px',
        paddingLeft: '20px',
        paddingRight: '8px',
        paddingY: '10px',
        '&:hover': {
          background: 'var(--border-color)',
        },
      }}
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
      <Button
        variant="contained"
        startIcon={<SearchIcon />}
        sx={{
          color: 'white',
          width: 'auto',
          height: 'auto',
          padding: ' 10px 20px',
          borderRadius: '50px',
          fontSize: '15px',
          '&:hover': {
            backgroundColor: 'var(--brand-color)',
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};
