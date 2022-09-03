import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, ButtonGroup, Divider } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { openTabPanel, selectFilter } from '@store/feature/tabPanel';

export const LittleSearchGroup: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useAppSelector((state) => state.tabPanel.location.value);
  const checkInDay = useAppSelector((state) => state.tabPanel.checkIn.day);
  const checkInMonth = useAppSelector((state) => state.tabPanel.checkIn.month);
  const checkOutDay = useAppSelector((state) => state.tabPanel.checkOut.day);
  const checkOutMonth = useAppSelector(
    (state) => state.tabPanel.checkOut.month
  );
  const dateString = `${checkInDay} ${checkInMonth} - ${checkOutDay} ${checkOutMonth}`;
  const totalGuest = useAppSelector((state) => state.tabPanel.guest.totalGuest);

  return (
    <ButtonGroup
      variant="text"
      aria-labelledby="littleSearchLabel"
      onClick={() => dispatch(openTabPanel())}
      sx={{
        height: 'auto',
        maxWidth: '100%',
        border: '1px solid var(--border-color)',
        borderRadius: '30px',
        backgroundColor: '#fff',
        boxShadow: '0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        transition: 'box-shadow .2s ease',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '&:hover': {
          boxShadow: '0 2px 4px rgba(0,0,0,0.18)',
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
        onClick={() => dispatch(selectFilter('where'))}
      >
        {location ? location : 'Anywhere'}
      </Button>
      <Divider variant="middle" orientation="vertical" flexItem />
      <Button
        sx={{
          paddingY: '11px',
          paddingX: '16px',
          height: '100%',
          overflow: 'hidden',
          '&:focus-visible': {
            outline: '2px solid black',
          },
        }}
        onClick={() => dispatch(selectFilter('check in'))}
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
          onClick={() => dispatch(selectFilter('guest'))}
        >
          {totalGuest
            ? `${
                totalGuest > 1 ? `${totalGuest} guests` : `${totalGuest} guest`
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
  );
};
