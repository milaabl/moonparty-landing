import { CustomHeadProps } from './CustomHeadProps.types';
import { FC } from 'react';
import Head from 'next/head';

export const CustomHead : FC<CustomHeadProps> = ({
  title
}) => <Head>
  <title>🪐{title}</title>
  <meta name="description" content="Welcome to the MoonParty" />
  <link rel="icon" href="/favicon.ico" />
</Head>
