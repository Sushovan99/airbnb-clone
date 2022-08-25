import { Box } from '@mui/material';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { toggleCheckOut } from '@store/feature/tabPanel';
import styles from '../../TabPanel.module.css';

export const CheckOut: React.FC = () => {
  const dispatch = useAppDispatch();
  const isCheckOutBtnActive = useAppSelector(
    (state) => state.tabPanel.checkOut.isActive
  );
  const checkOutDate = useAppSelector((state) => state.tabPanel.checkOut.value);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flex: 'var(--split-date-input_flex, 1 0 0%)',
        minWidth: 0,
        margin: '-1px',
      }}
    >
      <Box
        component="div"
        role="button"
        className={`${styles.dateBtn} ${
          isCheckOutBtnActive ? styles.dateBtnActive : styles.dateBtnInActive
        }`}
        onClick={() => dispatch(toggleCheckOut())}
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
            Check out
          </Box>
          <Box
            sx={{
              fontSize: '14px',
              lineHeight: '18px',
              color: checkOutDate ? 'var(--text-dark)' : 'var(--text-light)',
              fontWeight: checkOutDate ? 500 : 300,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%',
            }}
          >
            {checkOutDate ? checkOutDate : 'Add dates'}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
