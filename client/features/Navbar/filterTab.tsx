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
      >
        <Tab value="one" label="Stays" />
        <Tab value="two" label="Experiences" />
        <Tab value="three" label="Online experiences" />
      </Tabs>
    </Box>
  );
};
