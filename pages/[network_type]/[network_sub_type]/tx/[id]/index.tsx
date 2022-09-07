import type { NextPage } from 'next';
import React from 'react';

import type { PageParams } from 'lib/next/tx/types';

import TransactionNextPage from 'lib/next/tx/TransactionNextPage';

type Props = {
  pageParams: PageParams;
}

const TransactionPage: NextPage<Props> = ({ pageParams }: Props) => {
  return (
    <TransactionNextPage tab="details" pageParams={ pageParams }/>
  );
};

export default TransactionPage;

export { getStaticPaths } from 'lib/next/tx/getStaticPaths';
export { getStaticProps } from 'lib/next/getStaticProps';
