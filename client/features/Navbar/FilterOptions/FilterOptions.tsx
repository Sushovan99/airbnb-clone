import { Box } from '@mui/material';
import { DateFitler } from './DateFilter';
import { AddGuestFilter } from './AddGuestFilter';
import { LocationFilter } from './LocationFilter';

export const FilterOptions: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1.8fr',
        border: '1px solid var(--border-color)',
        borderRadius: '50px',
        margin: '14px',
        cursor: 'pointer',
      }}
    >
      <LocationFilter />

      <DateFitler />

      <AddGuestFilter />
    </Box>
  );
};
