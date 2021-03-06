import React, { useCallback, useEffect, useRef } from 'react';
import { Box, Divider } from '@mui/material';
import { CheckInFilter, CheckOutFilter } from './DateFilter';
import { AddGuestFilter } from './AddGuestFilter';
import { LocationFilter } from './LocationFilter';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { resetFilterState } from '@store/feature/filterOptions';
import { CheckOutsideClickHook } from '@utils/hooks/checkOutsideClick';

export const FilterOptions: React.FC = () => {
  const dispatch = useAppDispatch();

  const isCheckInFilterActive = useAppSelector(
    (state) => state.filterSearch.checkIn.isActive
  );

  const isCheckOutFilterActive = useAppSelector(
    (state) => state.filterSearch.checkOut.isActive
  );

  const isLocationFilterActive = useAppSelector(
    (state) => state.filterSearch.where.isActive
  );

  const isAddGuestFilterActive = useAppSelector(
    (state) => state.filterSearch.who.isActive
  );

  const containerRef = useRef<HTMLDivElement>(null);

  const clickOutsideHandler = (e: any) => {
    if (containerRef.current && !containerRef.current?.contains(e.target)) {
      dispatch(resetFilterState());
    }
  };

  CheckOutsideClickHook({
    ref: containerRef,
    handler: clickOutsideHandler,
    deps: [dispatch],
  });

  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '2fr 1px 1fr 1px 1fr 1px 1.8fr',
        border: '1px solid var(--border-color)',
        alignItems: 'center',
        borderRadius: '50px',
        margin: '14px',
        background: 'var(--background-1)',
      }}
    >
      <LocationFilter />
      <Divider
        orientation="vertical"
        variant="middle"
        sx={{
          height: '50%',
          opacity: isCheckInFilterActive || isLocationFilterActive ? 0 : 1,
        }}
      />
      <CheckInFilter />
      <Divider
        orientation="vertical"
        variant="middle"
        sx={{
          height: '50%',
          opacity: isCheckInFilterActive || isCheckOutFilterActive ? 0 : 1,
        }}
      />
      <CheckOutFilter />
      <Divider
        orientation="vertical"
        variant="middle"
        sx={{
          height: '50%',
          opacity: isCheckOutFilterActive || isAddGuestFilterActive ? 0 : 1,
        }}
      />
      <AddGuestFilter />
    </Box>
  );
};
