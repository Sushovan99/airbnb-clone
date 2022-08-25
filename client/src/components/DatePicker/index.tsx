import { StatefulCalendar } from 'baseui/datepicker';
import { useState, useEffect, useCallback } from 'react';
import { useAppDispatch } from '@store/hooks';
import { handleCheckIn, handleCheckOut } from '@store/feature/tabPanel';

interface ICustomDatePicker {
  orientation: 'horizontal' | 'vertical';
  padding?: number;
}

export const CustomDatePicker: React.FC<ICustomDatePicker> = ({
  orientation,
  padding,
}: ICustomDatePicker) => {
  const dispatch = useAppDispatch();

  const [selectedDate, setSelectedDate] = useState<Date[]>([]);
  const handleDispatch = useCallback(() => {
    const checkIn = selectedDate[0] ? selectedDate[0] : null;
    const checkOut = selectedDate[1] ? selectedDate[1] : null;
    if (checkIn) {
      const checkInStr = checkIn ? checkIn.toDateString().slice(4, 10) : '';
      const day = Number(checkInStr.split(' ')[1]);
      const month = checkInStr.split(' ')[0];
      dispatch(handleCheckIn({ value: checkInStr, day, month }));
    }

    if (checkOut) {
      const checkOutStr = checkOut ? checkOut.toDateString().slice(4, 10) : '';
      const day = Number(checkOutStr.split(' ')[1]);
      const month = checkOutStr.split(' ')[0];
      dispatch(handleCheckOut({ value: checkOutStr, day, month }));
    }
  }, [dispatch, selectedDate]);

  useEffect(() => {
    handleDispatch();
  }, [handleDispatch]);

  return (
    <>
      <StatefulCalendar
        onChange={({ date }) =>
          Array.isArray(date) ? setSelectedDate(date) : date
        }
        density="high"
        minDate={new Date()}
        orientation={orientation}
        monthsShown={2}
        value={selectedDate}
        fixedHeight={false}
        range
        overrides={{
          Root: {
            style: {
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          },
          Day: {
            style: {
              fontWeight: 500,
            },
          },
          CalendarContainer: {
            style: {
              paddingLeft: `${padding}px`,
              paddingRight: `${padding}px`,
            },
          },
          PrevButton: {
            style: {
              borderRadius: '50%',
              ':hover': {
                background: 'var(--background-1)',
              },
            },
          },
          NextButton: {
            style: {
              borderRadius: '50%',
              ':hover': {
                background: 'var(--background-1)',
              },
            },
          },
        }}
      />
    </>
  );
};
