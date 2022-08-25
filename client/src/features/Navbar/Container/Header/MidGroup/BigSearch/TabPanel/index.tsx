import React, { useRef } from 'react';
import { Box } from '@mui/material';
import { LocationFilter } from './LocationFilter';
import { DateFilter } from './DateFilter';
import { CheckOutsideClickHook as checkIfClickedOutside } from '@utils/hooks';
import { AddGuestFilter } from './AddGuestFilter';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { clickedOutsideTabPanel } from '@store/feature/tabPanel';
import styles from './TabPanel.module.css';

export const TabPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const tabPanelRef = useRef<HTMLDivElement>(null);
  const isTabPanelOpen = useAppSelector(
    (state) => state.tabPanel.isTabPanelOpen
  );
  const hasClickedOutside = useAppSelector(
    (state) => state.tabPanel.hasClickedOutside
  );
  const handleClickOutside = (e: any) => {
    if (tabPanelRef.current && !tabPanelRef.current.contains(e.target)) {
      if (isTabPanelOpen) dispatch(clickedOutsideTabPanel());
    }
  };

  checkIfClickedOutside<HTMLDivElement, Function>({
    ref: tabPanelRef,
    handler: handleClickOutside,
    deps: [dispatch],
  });

  return (
    <Box
      component="div"
      aria-labelledby="search-block-tab-STAYS"
      role="tabpanel"
      id="search-tabpanel"
      className={`${styles.tabPanelContainer} ${
        hasClickedOutside ? styles.inActive : styles.active
      }`}
      ref={tabPanelRef}
    >
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 0%',
          height: '100%',
          minWidth: 0,
          pointerEvents: 'auto',
        }}
      >
        <LocationFilter />
        <Box
          sx={{
            borderRight: '1px solid var(--border-color)',
            height: '32px',
            alignSelf: 'center',
          }}
        ></Box>
        <DateFilter />
        <Box
          sx={{
            borderRight: '1px solid var(--border-color)',
            height: '32px',
            alignSelf: 'center',
          }}
        ></Box>
        <AddGuestFilter />
      </Box>
    </Box>
  );
};
