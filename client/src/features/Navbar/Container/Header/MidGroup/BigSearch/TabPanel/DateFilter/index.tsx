import { Box } from '@mui/material';
import { CheckIn } from './CheckIn';
import { CheckOut } from './CheckOut';
import { DateDialog } from './DateDialog';

export const DateFilter: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 'var(--split-date-input_flex, 2 0 0%)',
        minWidth: 0,
      }}
    >
      <CheckIn />
      <Box
        sx={{
          borderRight: '1px solid var(--border-color)',
          height: '32px',
          alignSelf: 'center',
        }}
      ></Box>
      <CheckOut />
      <DateDialog />
    </Box>
  );
};
