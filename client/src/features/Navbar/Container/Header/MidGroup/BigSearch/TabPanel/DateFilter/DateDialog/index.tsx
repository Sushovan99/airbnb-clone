import { Box } from '@mui/material';
import { CustomDatePicker } from '@src/components/DatePicker';
import { useAppSelector } from '@store/hooks';
import styles from './DateDialog.module.css';

export const DateDialog: React.FC = () => {
  const isCheckInActive = useAppSelector(
    (state) => state.tabPanel.checkIn.isActive
  );
  const isCheckOutActive = useAppSelector(
    (state) => state.tabPanel.checkOut.isActive
  );

  return (
    <>
      <Box
        className={`${styles.container} ${
          isCheckInActive || isCheckOutActive ? styles.active : styles.hidden
        }`}
      >
        <CustomDatePicker orientation="horizontal" padding={50} />
      </Box>
      <Box
        className={`${styles.containerSmall} ${
          isCheckInActive || isCheckOutActive ? styles.active : styles.hidden
        }`}
      >
        <CustomDatePicker orientation="vertical" padding={0} />
      </Box>
    </>
  );
};
