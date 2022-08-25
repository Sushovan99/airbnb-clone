import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { addGuest, removeGuest } from '@store/feature/tabPanel';
import { ButtonGroup } from './ButtonGroup';
import styles from './AddGuestDialog.module.css';

interface IContentText {
  key: 'adult' | 'children' | 'infant' | 'pets';
  heading: string;
  sub: string;
  divider?: boolean;
  value: number;
  isDisabled: boolean;
}

export const AddGuestDialog: React.FC = () => {
  const dispatch = useAppDispatch();
  const adultValue = useAppSelector(
    (state) => state.tabPanel.guest.adult.value
  );
  const childrenValue = useAppSelector(
    (state) => state.tabPanel.guest.children.value
  );
  const infantValue = useAppSelector(
    (state) => state.tabPanel.guest.infant.value
  );
  const petsValue = useAppSelector((state) => state.tabPanel.guest.pets.value);

  const contentText: IContentText[] = [
    {
      key: 'adult',
      heading: 'Adult',
      sub: 'Ages 13 or above',
      divider: true,
      value: adultValue,
      isDisabled:
        adultValue <= 0 ||
        (petsValue === 1 && adultValue === 1) ||
        (infantValue === 1 && adultValue === 1) ||
        (childrenValue === 1 && adultValue === 1)
          ? true
          : false,
    },
    {
      key: 'children',
      heading: 'Children',
      sub: 'Ages 2–12',
      divider: true,
      value: childrenValue,
      isDisabled: childrenValue <= 0 ? true : false,
    },
    {
      key: 'infant',
      heading: 'Infant',
      sub: 'Under 2',
      divider: true,
      value: infantValue,
      isDisabled: infantValue <= 0 ? true : false,
    },
    {
      key: 'pets',
      heading: 'Pets',
      sub: 'Bringing a service animal?',
      value: petsValue,
      isDisabled: petsValue <= 0 ? true : false,
    },
  ];

  return (
    <Box
      sx={{ position: 'absolute', left: 0, right: 0, top: '100%', zIndex: 4 }}
    >
      <Box className={styles.container}>
        <section>
          <Box sx={{ padding: '0 6px', width: '342px' }}>
            {contentText.map((item) => (
              <React.Fragment key={item.key}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '20px',
                    paddingBottom: '24px',
                    paddingLeft: '8px',
                  }}
                >
                  <Box>
                    <Typography variant="subtitle1" fontWeight="500">
                      {item.heading}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="300"
                      sx={{ color: 'var(--filter-sub-text)' }}
                    >
                      {item.sub}
                    </Typography>
                  </Box>
                  <ButtonGroup
                    value={item.value}
                    addGuest={() => dispatch(addGuest(item.key))}
                    removeGuest={() => dispatch(removeGuest(item.key))}
                    isDisabled={item.isDisabled}
                  />
                </Box>

                {item.divider ? <Divider sx={{ marginLeft: '8px' }} /> : null}
              </React.Fragment>
            ))}
          </Box>
        </section>
      </Box>
    </Box>
  );
};
