import React, { ReactElement } from 'react';
import MainLayout from '@/common/layout/MainLayout';
import { Greeting } from '@/modules/greeting';

export default function Home() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
