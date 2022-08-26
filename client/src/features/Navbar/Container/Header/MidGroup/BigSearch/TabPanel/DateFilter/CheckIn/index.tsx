import { Box, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { toggleCheckIn } from '@store/feature/tabPanel';
import styles from '../../TabPanel.module.css';

export const CheckIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const isCheckInBtnActive = useAppSelector(
    (state) => state.tabPanel.checkIn.isActive
  );
  const checkInDate = useAppSelector((state) => state.tabPanel.checkIn.value);

  return (
    <Box
      sx={{
        display: 'flex',
        flex: '1 0 0%',
        alignItems: 'center',
        minWidth: 0,
        position: 'relative',
        margin: '-1px',
      }}
    >
      <Button
        className={`${styles.dateBtn} ${
          isCheckInBtnActive ? styles.dateBtnActive : styles.dateBtnInActive
        }`}
        onClick={() => dispatch(toggleCheckIn())}
      >
        <Box
          sx={{
            position: 'relative',
            whiteSpace: 'nowrap',
            zIndex: 1,
            width: '100%',
            overflow: 'hidden',
            padding: '14px 24px',
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
            Check in
          </Box>
          <Box
            sx={{
              fontSize: '14px',
              lineHeight: '18px',
              color: checkInDate ? 'var(--text-dark)' : 'var(--text-light)',
              fontWeight: checkInDate ? 500 : 300,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%',
            }}
          >
            {checkInDate ? checkInDate : 'Add dates'}
          </Box>
        </Box>
      </Button>
    </Box>
  );
};
