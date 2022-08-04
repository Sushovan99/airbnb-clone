import {
  List,
  Box,
  ListItemText,
  ListItem,
  ListItemButton,
  Divider,
} from '@mui/material';

import React from 'react';

export const AuthLists: React.FC = () => {
  return (
    <Box
      sx={{
        width: '200px',
        position: 'absolute',
        top: '120%',
        right: '50%',
        fontWeight: '300',
        border: '1px solid var(--border-color)',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
        zIndex: '13',
        background: 'white',
        borderRadius: '10px',
      }}
    >
      <nav aria-label="authentication-options">
        <List sx={{ fontSize: '14px' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Log in" sx={{ fontWeight: 500 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Sign up" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Host your home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Host an experience" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};
