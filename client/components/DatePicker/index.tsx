import { StatefulCalendar } from 'baseui/datepicker';
import { useState } from 'react';
import { useAppDispatch } from '@store/hooks';
import { handleDateChange } from '@store/feature/filterOptions';

interface ICustomDatePicker {
  orientation: 'horizontal' | 'vertical';
}

export const CustomDatePicker: React.FC<ICustomDatePicker> = ({
  orientation,
}: ICustomDatePicker) => {
  const dispatch = useAppDispatch();

  const [selectedDate, setSelectedDate] = useState<Date[]>([]);
  const [checkIn, checkOut] = selectedDate;
  const checkInStr = checkIn ? checkIn.toDateString().slice(4, 10) : '';
  const checkOutStr = checkOut ? checkOut.toDateString().slice(4, 10) : '';

  if (selectedDate.length > 1) {
    dispatch(
      handleDateChange({ checkOutDate: checkOutStr, checkInDate: checkInStr })
    );
  } else {
    dispatch(handleDateChange({ checkInDate: checkInStr }));
  }

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
