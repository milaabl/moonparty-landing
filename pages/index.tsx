import { convertToDayMonthYear } from '../utils/convertToDayMonthYear.util';
import { CustomHead } from '../common/skeleton/CustomHead';
import type { GetServerSideProps, NextPage } from 'next';
import S from '../styles/Index.module.scss';
import { CountDown } from '../common/countdown/CountDown';
import { currentDate, targetDate } from '../constants/countdown';
import Router from 'next/router';

const Index: NextPage = ({currentDate} : IndexProps) => {
  return (
    <div className={S.container}>
      <CustomHead title="MoonParty" />
      <h1 className={S.title}>MOON LANDING PARTY</h1>
      <h2 className={S.targetDate}>{convertToDayMonthYear(targetDate)}</h2>
      <h3 className={S.anniversaryLabel}>Anniversary starts in:</h3>
      <CountDown currentDate={currentDate} targetDate={targetDate} />

      <button
        onClick={(e : SyntheticEvent<HTMLButtonElement>) => {
          Router.push('/share');
        }}
        className={S.shareButton}>Share Event</button>
    </div>
  )
}

interface IndexProps {
  currentDate : number
};



export const getServerSideProps : GetServerSideProps = () => {
  return {
    props : {
      currentDate
    }
  };
};

export default Index
