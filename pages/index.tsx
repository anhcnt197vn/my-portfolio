import React, { ReactElement } from 'react';
import MainLayout from 'src/layout/MainLayout';
import { Home } from '@/modules/home';

export default function HomePage() {
  return <Home />;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
