import { StatefulCalendar } from 'baseui/datepicker';
import { useState } from 'react';
import { useAppDispatch } from '@store/hooks';
import { handleCheckIn, handleCheckOut } from '@store/feature/filterOptions';

interface ICustomDatePicker {
  orientation: 'horizontal' | 'vertical';
}

export const CustomDatePicker: React.FC<ICustomDatePicker> = ({
  orientation,
}: ICustomDatePicker) => {
  const dispatch = useAppDispatch();
  const [selectedDate, setSelectedDate] = useState<Date[]>([]);

  const handleDispatch = () => {
    const checkIn = selectedDate[0] ? selectedDate[0] : null;
    const checkOut = selectedDate[1] ? selectedDate[1] : null;
    if (checkIn) {
      const checkInStr = checkIn ? checkIn.toDateString().slice(4, 10) : '';
      dispatch(handleCheckIn(checkInStr));
    }

    if (checkOut) {
      const checkOutStr = checkOut ? checkOut.toDateString().slice(4, 10) : '';
      dispatch(handleCheckOut(checkOutStr));
    }
  };

  const onDateChange = (date: Date[]) => {
    setSelectedDate(date);
    handleDispatch();
  };

  return (
    <>
      <StatefulCalendar
        onChange={({ date }) =>
          Array.isArray(date) ? onDateChange(date) : date
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
              fontWeight: '500',
            },
          },
          CalendarContainer: {
            style: {
              paddingLeft: '50px',
              paddingRight: '50px',
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
