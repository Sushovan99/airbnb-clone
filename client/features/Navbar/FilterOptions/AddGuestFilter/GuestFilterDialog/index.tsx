import * as React from 'react';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CustomDialog } from '@components/Dialog';

interface IContentText {
  heading: string;
  sub: string;
}

const contentText: IContentText[] = [
  {
    heading: 'Adult',
    sub: 'Ages 13 or above',
  },
  {
    heading: 'Children',
    sub: 'Ages 2–12',
  },
  {
    heading: 'Infant',
    sub: 'Under 2',
  },
  {
    heading: 'Pets',
    sub: 'Bringing a service animal?',
  },
];

export const GuestFilterDialog: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const paperStyles = {
    width: '33%',
    position: 'absolute',
    top: '21%',
    right: '14%',
    borderRadius: '30px',
  };

  return (
    <CustomDialog paperStyles={paperStyles} open={open} onClose={handleClose}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '30px 40px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="subtitle1" fontWeight="500">
              Adults
            </Typography>
            <Typography
              variant="body2"
              fontWeight="300"
              sx={{ color: 'var(--filter-sub-text)' }}
            >
              Ages 13 or above
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IconButton
              aria-label="remove"
              sx={{
                color: 'var(--filter-sub-text)',
                border: '1px solid var(--filter-sub-text)',

                padding: '5px',
                '&:hover': {
                  color: 'var(--text-dark)',
                  border: '1px solid var(--text-dark)',
                },
              }}
            >
              <RemoveIcon sx={{ fontSize: '20px' }} />
            </IconButton>
            <Typography
              variant="body2"
              fontWeight="500"
              color="var(--text-dark)"
            >
              0
            </Typography>
            <IconButton
              aria-label="add"
              sx={{
                color: 'var(--filter-sub-text)',
                padding: '5px',

                border: '1px solid var(--filter-sub-text)',
                '&:hover': {
                  color: 'var(--text-dark)',
                  border: '1px solid var(--text-dark)',
                },
              }}
            >
              <AddIcon sx={{ fontSize: '20px' }} />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ marginY: '20px' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="subtitle1" fontWeight="500">
              Children
            </Typography>
            <Typography
              variant="body2"
              fontWeight="300"
              sx={{ color: 'var(--filter-sub-text)' }}
            >
              {'Ages 2–12'}
            </Typography>
          </Box>
          <Box>some</Box>
        </Box>

        <Divider sx={{ marginY: '20px' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="subtitle1" fontWeight="500">
              Infant
            </Typography>
            <Typography
              variant="body2"
              fontWeight="300"
              sx={{ color: 'var(--filter-sub-text)' }}
            >
              Under 2
            </Typography>
          </Box>
          <Box>some</Box>
        </Box>

        <Divider sx={{ marginY: '20px' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="subtitle1" fontWeight="500">
              Pets
            </Typography>
            <Typography
              variant="body2"
              fontWeight="300"
              sx={{ color: 'var(--filter-sub-text)' }}
            >
              Bringing a service animal?
            </Typography>
          </Box>
          <Box>some</Box>
        </Box>
      </Box>
    </CustomDialog>
  );
};
