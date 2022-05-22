import { FC, useEffect, useState } from 'react';
import { useCountDownProps } from './useCountDown.types';
import { convertToDateMeasurements } from '../../utils/convertToDateMeasurements.util';

export const useCountDown : FC<useCountDownProps> = ( { currentDate, targetDate } ) => {
  const countDownDate : Date = new Date(targetDate).getTime();

  const [countDown, setCountDown ] = useState<number>(
    countDownDate - currentDate
  );

  useEffect(() => {
      const interval : ReturnType<typeof setInterval> = setInterval(() => {
          setCountDown(countDownDate - new Date().getTime());
      }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return convertToDateMeasurements(countDown);
};
