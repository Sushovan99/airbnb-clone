import { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, ButtonGroup, Divider } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { selectSearchFilter, openFilter } from '@store/feature/filterOptions';

export const MidGroup: FC = () => {
  const dispatch = useAppDispatch();
  const location = useAppSelector((state) => state.filterSearch.where.value);
  const checkInDay = useAppSelector((state) => state.filterSearch.checkIn.day);
  const checkInMonth = useAppSelector(
    (state) => state.filterSearch.checkIn.month
  );
  const checkOutDay = useAppSelector(
    (state) => state.filterSearch.checkOut.day
  );
  const checkOutMonth = useAppSelector(
    (state) => state.filterSearch.checkOut.month
  );
  const dateString = `${checkInDay} ${checkInMonth} - ${checkOutDay} ${checkOutMonth}`;
  const totalGuest = useAppSelector(
    (state) => state.filterSearch.who.totalGuest
  );

  return (
    <Box>
      <ButtonGroup
        variant="text"
        aria-label="filter group"
        onClick={() => dispatch(openFilter())}
        sx={{
          height: 'auto',
          border: '1px solid var(--border-color)',
          borderRadius: '30px',
          boxShadow:
            'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          transition: 'all .2s ease-in',
          '&:hover': {
            boxShadow:
              ' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
          },
        }}
      >
        <Button
          sx={{
            height: '100%',
            borderRadius: '30px',
            paddingLeft: '20px',
            paddingRight: '16px',
            paddingY: '11px',
            '&:focus-visible': {
              outline: '2px solid black',
            },
          }}
          onClick={() => dispatch(selectSearchFilter('where'))}
        >
          {location ? location : 'Anywhere'}
        </Button>
        <Divider variant="middle" orientation="vertical" flexItem />
        <Button
          sx={{
            paddingY: '11px',
            paddingX: '16px',
            height: '100%',
            '&:focus-visible': {
              outline: '2px solid black',
            },
          }}
          onClick={() => dispatch(selectSearchFilter('check in'))}
        >
          {!checkInDay && !checkOutDay ? 'Any week' : dateString}
        </Button>
        <Divider variant="middle" orientation="vertical" flexItem />
        <Box>
          <Button
            sx={{
              paddingY: '8px',
              display: 'flex',
              paddingLeft: '16px',
              gap: '10px',
              color: totalGuest ? 'var(--text-dark)' : 'var(--text-light)',
              borderTopRightRadius: '30px',
              borderBottomRightRadius: '30px',
              fontWeight: totalGuest ? 500 : 300,
              '&:focus-visible': { outline: '2px solid black' },
            }}
            onClick={() => dispatch(selectSearchFilter('who'))}
          >
            {totalGuest
              ? `${
                  totalGuest > 1
                    ? `${totalGuest} guests`
                    : `${totalGuest} guest`
                }`
              : 'Add guests'}
            <SearchIcon
              fontSize="large"
              sx={{
                backgroundColor: 'primary.main',
                borderRadius: '50%',
                color: 'white',
                padding: '6px',
                fontSize: '30px',
              }}
            />
          </Button>
        </Box>
      </ButtonGroup>
    </Box>
  );
};
