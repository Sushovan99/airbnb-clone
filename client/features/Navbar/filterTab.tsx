import { Tab, Tabs, Zoom, Grow } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setValue } from '@store/feature/filterTab';

export const FilterTab: React.FC = () => {
  const dispatch = useAppDispatch();
  const tabValue = useAppSelector((state) => state.filterTab.value);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    dispatch(setValue(newValue));
  };

  const isFilterOpen = useAppSelector(
    (state) => state.filterSearch.isFilterOpen
  );

  return (
    <Zoom in={isFilterOpen} appear={true} mountOnEnter unmountOnExit>
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
    </Zoom>
  );
};
