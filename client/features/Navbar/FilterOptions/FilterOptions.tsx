import React, { useRef, useCallback } from 'react';
import { Box, Divider, Zoom } from '@mui/material';
import { CheckInFilter, CheckOutFilter } from './DateFilter';
import { AddGuestFilter } from './AddGuestFilter';
import { LocationFilter } from './LocationFilter';
import { GuestFilterDialog } from './AddGuestFilter/GuestFilterDialog';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { resetFilterState } from '@store/feature/filterOptions';
import { CheckOutsideClickHook } from '@utils/hooks/checkOutsideClick';
import { DateFilterDialog } from './DateFilter';
import { LocationFilterDialog } from './LocationFilter';

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

  const isFilterOpen = useAppSelector(
    (state) => state.filterSearch.isFilterOpen
  );

  const isAnyFilterActive =
    isCheckInFilterActive ||
    isCheckOutFilterActive ||
    isAddGuestFilterActive ||
    isLocationFilterActive;

  const containerRef = useRef<HTMLDivElement>(null);

  const clickOutsideHandler = useCallback(
    (e: any) => {
      if (containerRef.current && !containerRef.current?.contains(e.target)) {
        dispatch(resetFilterState());
      }
    },
    [dispatch]
  );

  CheckOutsideClickHook<HTMLDivElement, Function>({
    ref: containerRef,
    handler: clickOutsideHandler,
    deps: [dispatch],
  });

  return (
    <Zoom in={isFilterOpen} appear={true} mountOnEnter>
      <Box
        ref={containerRef}
        sx={{
          width: '100%',
          display: 'grid',
          position: 'relative',
          gridTemplateColumns: '2fr 1px 1fr 1px 1fr 1px 1.8fr',
          border: '1px solid var(--border-color)',
          alignItems: 'center',
          borderRadius: '50px',
          marginBottom: '14px',
          marginTop: '3px',
          background: isAnyFilterActive ? 'var(--background-1)' : 'white',
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
        <GuestFilterDialog />
        <DateFilterDialog />
        <LocationFilterDialog />
      </Box>
    </Zoom>
  );
};
