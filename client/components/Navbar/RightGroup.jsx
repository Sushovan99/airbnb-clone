import { Language, Person } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useRef, useEffect } from 'react';
import { CustomList } from '../Lists';

export const RightGroup = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen((prevState) => !prevState);
      }
    };
    document.addEventListener('click', checkIfClickedOutside);

    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [open]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        sx={{
          color: 'primary.dark',
          padding: '0 12px',
          borderRadius: '20px',
          '&:hover': { backgroundColor: grey[100] },
        }}
      >
        Become a host
      </Button>
      <IconButton
        sx={{
          color: 'primary.dark',
        }}
      >
        <Language fontSize="small" />
      </IconButton>
      <Button
        ref={ref}
        sx={{
          borderRadius: '20px',
          border: '1px solid var(--border-color)',
          marginLeft: '4px',
          position: 'relative',
          '&:focus': {
            boxShadow: `${
              open
                ? ' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
                : 'none'
            }`,
          },
          '&:hover': {
            boxShadow:
              'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
          },
        }}
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <MenuIcon fontSize="small" />
        <Person
          sx={{
            backgroundColor: 'var(--text-light)',
            color: 'white',
            borderRadius: '50%',
            marginLeft: '8px',
          }}
        />
        {open && <CustomList />}
      </Button>
    </Box>
  );
};
