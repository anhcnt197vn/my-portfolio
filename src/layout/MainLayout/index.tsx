import React, { ReactElement } from 'react';
import { SideBar } from '../Sidebar';
import styles from './index.module.scss';

export default function MainLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <SideBar />
      <main className={styles.mainContent}>{children}</main>
    </>
  );
}
