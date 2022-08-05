import * as React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { AddRemoveButtons } from './AddRemoveButton';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { addGuest, removeGuest } from '@store/feature/filterOptions';
interface IContentText {
  key: 'adult' | 'children' | 'infant' | 'pets';
  heading: string;
  sub: string;
  divider?: boolean;
  value: number;
  isDisabled: boolean;
}

export const GuestFilterDialog: React.FC = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.filterSearch.who.isActive);
  const adultValue = useAppSelector(
    (state) => state.filterSearch.who.adult.value
  );
  const childrenValue = useAppSelector(
    (state) => state.filterSearch.who.children.value
  );
  const infantValue = useAppSelector(
    (state) => state.filterSearch.who.infant.value
  );
  const petsValue = useAppSelector(
    (state) => state.filterSearch.who.pets.value
  );

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

  return open ? (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '30px 40px',
        width: '50%',
        position: 'absolute',
        top: 80,
        right: 0,
        borderRadius: '30px',
        border: '1px solid var(--border-color)',
      }}
    >
      {contentText.map((item) => (
        <React.Fragment key={item.key}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
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
            <AddRemoveButtons
              value={item.value}
              addGuest={() => dispatch(addGuest(item.key))}
              removeGuest={() => dispatch(removeGuest(item.key))}
              isDisabled={item.isDisabled}
            />
          </Box>

          {item.divider ? <Divider sx={{ marginY: '20px' }} /> : null}
        </React.Fragment>
      ))}
    </Box>
  ) : null;
};
