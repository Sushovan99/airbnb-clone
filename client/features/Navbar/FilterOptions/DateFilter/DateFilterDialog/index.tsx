import { Box } from '@mui/material';
import { CustomDatePicker } from '@components/DatePicker';
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px 30px',
        width: '100%',
        position: 'absolute',
        top: 80,
        borderRadius: '30px',
        border: '1px solid var(--border-color)',
        // overflowY: 'scroll',
      }}
    >
      <CustomDatePicker orientation="horizontal" />
    </Box>
  );
};
