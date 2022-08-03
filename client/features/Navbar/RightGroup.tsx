import { Language, Person } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useRef, useEffect } from 'react';
import { AuthLists } from './Lists';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { toggle } from '@store/feature/loginModal';

export const RightGroup: React.FC = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.loginModal.isOpen);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (open && buttonRef.current && !buttonRef.current.contains(e.target)) {
        dispatch(toggle());
      }
    };
    document.addEventListener('click', checkIfClickedOutside);

    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [open, dispatch]);

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
        ref={buttonRef}
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
        onClick={() => dispatch(toggle())}
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
        {open && <AuthLists />}
      </Button>
    </Box>
  );
};
