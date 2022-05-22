import S from '../../styles/CountDown.module.scss';
import React, { FC, useId } from 'react';
import { CountDownProps } from './CountDownProps.types';
import { useCountDown } from '../../hooks/useCountDown/useCountDown';
import { measurements } from './CountDown.utils';
import { convertToDateMeasurements } from '../../utils/convertToDateMeasurements.util';

export const CountDown : FC<CountDownProps> = ({
  currentDate,
  targetDate
} ) => {

  const timeLeftValues = useCountDown<Array<number>>( { currentDate, targetDate } );

  if (
    timeLeftValues
      .reduce(
        (a, b) => a + b, 0
      ) <= 0) {
    return <span>Welcome to the MoonParty! moonparty.com</span>
  }
  else {
    return (
      <ul className={S.countDownWrapper}>
        {timeLeftValues.map(
        ( measurement : number, key : number) => <li className={S.countDownItem} key={useId()}>
          <span>{measurement < 10 ? `0${measurement}` : measurement}</span>
          <span>{measurements[key]}</span>
        </li>
      )}
      </ul>
    );
  }
};
