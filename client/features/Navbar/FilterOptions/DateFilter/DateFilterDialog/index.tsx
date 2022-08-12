import React from 'react';
import { CustomDatePicker } from '@components/DatePicker';
import { Box } from '@mui/material';
import { useAppSelector } from '@store/hooks';

export const DateFilterDialog: React.FC = () => {
  const isCheckInActive = useAppSelector(
    (state) => state.filterSearch.checkIn.isActive
  );
  const isCheckOutActive = useAppSelector(
    (state) => state.filterSearch.checkOut.isActive
  );
  return (
    <Box
      sx={{
        display: isCheckInActive || isCheckOutActive ? 'flex' : 'none',
        justifyContent: 'center',
        padding: '30px 40px',
        width: '100%',
        maxHeight: '100vh',
        position: 'absolute',
        top: 80,
        borderRadius: '30px',
        border: '1px solid var(--border-color)',
        backgroundColor: 'white',
      }}
    >
      <CustomDatePicker orientation="horizontal" />
    </Box>
  );
};
