import * as React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { CustomDialog } from '@components/Dialog';
import { AddRemoveButtons } from './AddRemoveButton';

interface IContentText {
  heading: string;
  sub: string;
  divider?: boolean;
}

const contentText: IContentText[] = [
  {
    heading: 'Adult',
    sub: 'Ages 13 or above',
    divider: true,
  },
  {
    heading: 'Children',
    sub: 'Ages 2–12',
    divider: true,
  },
  {
    heading: 'Infant',
    sub: 'Under 2',
    divider: true,
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
        {contentText.map((item) => (
          <React.Fragment key={item.heading}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography variant="subtitle1" fontWeight="500">
                  {item.heading}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="300"
                  sx={{ color: 'var(--filter-sub-text)' }}
                >
                  {item.sub}
                </Typography>
              </Box>
              <AddRemoveButtons />
            </Box>

            {item.divider ? <Divider sx={{ marginY: '20px' }} /> : null}
          </React.Fragment>
        ))}
      </Box>
    </CustomDialog>
  );
};
