import crossIcon from '../../public/icons/cross-icon.svg';
import facebookIcon from '../../public/icons/facebook-icon.svg';
import twitterIcon from '../../public/icons/twitter-icon.svg';
import linkIcon from '../../public/icons/link.svg';
import { copy } from '../../utils/copy.util';
import S from '../../styles/Share.module.scss';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { SyntheticEvent, FC, useState } from 'react';
import Router from 'next/router';

export const SocialShareModal : FC = () => {
  const [ link ] = useState<string>('https://moonparty.com');
  return ( <div className={S.modalContainer}>
    <button
      onClick={(e : SyntheticEvent<HTMLButtonElement>) => {
        Router.push('/');
      }}
      className={S.modalCloseButton}>
        <img src={crossIcon.src} alt="x" />
    </button>
    <h1 className={S.title}>Share this event with your social community</h1>
    <ul className={S.socialShareIconsList}>
      <li><FacebookShareButton
      quote="Who else to the MoonParty2?"
      url="https://moonparty2.com"
    ><img src={facebookIcon.src} alt="Facebook"/></FacebookShareButton></li>
    <li><TwitterShareButton
      quote="Who else to the MoonParty? https://moonparty.com"
      hashtags={['#moonparty']}
      url="https://moonparty.com"
    ><img src={twitterIcon.src} alt="Twitter"/></TwitterShareButton></li>
    </ul>
    <span className={S.option}>Or copy link</span>
    <span className={S.copy}
      onClick={
        (e : SyntheticEvent<HTMLSpanElement>) => copy(link)
      }>
          <img src={linkIcon.src} alt="Link icon" />
          <span>{link}</span>
          <span>Copy</span>
      </span>
    </div>
  );
};
