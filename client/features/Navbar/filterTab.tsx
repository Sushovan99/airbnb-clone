import { Box, Tab, Tabs } from '@mui/material';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setValue } from '@store/feature/filterTab';

export const FilterTab: FC = () => {
  const dispatch = useAppDispatch();
  const tabValue = useAppSelector((state) => state.filterTab.value);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    dispatch(setValue(newValue));
  };

  return (
    <Box>
      <Tabs
        textColor="inherit"
        value={tabValue}
        onChange={handleChange}
        aria-label="filter tabs"
        variant="standard"
      >
        <Tab value="one" label="Stays" sx={{ fontSize: '15px' }} />
        <Tab value="two" label="Experiences" sx={{ fontSize: '15px' }} />
        <Tab
          value="three"
          label="Online experiences"
          sx={{ fontSize: '15px' }}
        />
      </Tabs>
    </Box>
  );
};
