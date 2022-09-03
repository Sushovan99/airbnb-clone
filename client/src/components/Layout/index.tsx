import React, { useEffect, useCallback } from 'react';
import { HeaderContainer } from '@src/features/Navbar/Container';
import { FooterContainer } from '@src/features';
import { Box } from '@mui/material';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { closeTabPanel } from '@store/feature/tabPanel';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const isTabPanelOpen = useAppSelector(
    (state) => state.tabPanel.isTabPanelOpen
  );
  const onScroll = useCallback(
    (_e: Event) => {
      if (isTabPanelOpen) {
        dispatch(closeTabPanel());
      }
    },
    [isTabPanelOpen, dispatch]
  );

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <Box component="div" sx={{ position: 'relative', isolation: 'isolate' }}>
      <HeaderContainer />
      <main>{children}</main>
      <FooterContainer />
    </Box>
  );
};
