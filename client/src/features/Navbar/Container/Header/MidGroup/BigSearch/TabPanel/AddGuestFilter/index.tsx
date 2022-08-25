import React from 'react';
import Image from 'next/image';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import {
  toggleGuest,
  resetGuestFilter,
  closeTabPanel,
} from '@store/feature/tabPanel';
import { GradientSearchButton } from '@src/components/Buttons';
import { AddGuestDialog } from './AddGuestDialog';
import SearchIcon from '@public/assets/svg/search.svg';
import { guestStringFunc } from '@utils/func/guestString';
import styles from '../TabPanel.module.css';

export const AddGuestFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const isGuestFilterActive = useAppSelector(
    (state) => state.tabPanel.guest.isActive
  );
  const adult = useAppSelector((state) => state.tabPanel.guest.adult.value);
  const infant = useAppSelector((state) => state.tabPanel.guest.infant.value);
  const children = useAppSelector(
    (state) => state.tabPanel.guest.children.value
  );
  const pets = useAppSelector((state) => state.tabPanel.guest.pets.value);
  const guestString = guestStringFunc(adult, children, infant, pets);

  const handleResetGuest = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(resetGuestFilter());
  };

  const handleSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(closeTabPanel());
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        minWidth: 0,
        position: 'relative',
        margin: '-1px',
        flex: 'var( --input-with-search-button_flex, 0.95 0 auto)',
      }}
    >
      <Box
        component="div"
        role="button"
        className={`${styles.dateBtn} ${styles.addGuestBorder} ${
          isGuestFilterActive ? styles.dateBtnActive : styles.dateBtnInActive
        }`}
        onClick={() => dispatch(toggleGuest())}
      >
        <Box
          sx={{
            padding: '14px 24px',
            position: 'relative',
            whiteSpace: 'nowrap',
            zIndex: 1,
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <Box
            sx={{
              fontSize: '12px',
              lineHeight: '16px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              paddingBottom: '2px',
            }}
          >
            Who
          </Box>
          <Box
            sx={{
              fontSize: '14px',
              lineHeight: '18px',
              color: !guestString ? 'var(--text-light)' : 'var(--text-dark)',
              fontWeight: !guestString ? 300 : 500,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '90%',
            }}
          >
            {!guestString ? 'Add guests' : guestString}
          </Box>
          {isGuestFilterActive && guestString && (
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
              }}
            >
              <IconButton
                aria-label="clear-input"
                sx={{
                  color: 'var(--text-dark)',
                  padding: '4px',
                  backgroundColor: 'var( --background-1)',
                  transition: 'background-color .2s ease',
                  '&:hover': {
                    backgroundColor:
                      'var( --big-search-button_background_hover)',
                  },
                }}
                onClick={handleResetGuest}
              >
                <CloseIcon sx={{ fontSize: '16px' }} />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          flex: '0 0 auto',
          position: 'relative',
          zIndex: 5,
          marginLeft: '-6px',
          paddingRight: '9px',
        }}
      >
        <GradientSearchButton
          active={isGuestFilterActive}
          handlerFunc={handleSearch}
        >
          <Box
            sx={{
              display: 'inline-flex',
              position: 'relative',
              verticalAlign: 'middle',
              zIndex: 1,
              padding: '16px',
            }}
          >
            <Box sx={{ width: '16px' }}>
              <Image src={SearchIcon} alt="Search-icon-svg" />
            </Box>
            <Box
              className={`${styles.gradientSearchBtnSmall} ${
                isGuestFilterActive
                  ? styles.gradientSearchBtnActive
                  : styles.gradientSearchBtnInactive
              }`}
            >
              <span>Search</span>
            </Box>
          </Box>
        </GradientSearchButton>
      </Box>
      {isGuestFilterActive && <AddGuestDialog />}
    </Box>
  );
};
