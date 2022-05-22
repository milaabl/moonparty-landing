import { CustomHead } from '../common/skeleton/CustomHead';
import type { NextPage } from 'next';
import { Fragment } from 'react';
import { SocialShareModal } from '../common/modals/SocialShareModal';

const Share : NextPage = () => {
  return <Fragment>
    <CustomHead title="Share with your local community" />
    <SocialShareModal />
  </Fragment>
};

export default Share;
