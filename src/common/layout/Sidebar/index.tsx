import React from 'react';
import { SocialButton } from '@/common/components/SocialButton';
import { SocialTypeEnum } from '@/common/utils/types';
import { AvatarFlip } from '@/common/components/AvatarFlip';
import styles from './index.module.scss';
import classNames from 'classnames';

export const SideBar = () => {
  return (
    <header className={styles.sidebarContainer}>
      <div className={styles.profile}>
        <AvatarFlip />
        {/* <h1 className={styles.name}>Brown</h1> */}
        <div className={styles.socialLinks}>
          <SocialButton socialType={SocialTypeEnum.FACEBOOK} />
          <SocialButton socialType={SocialTypeEnum.INSTAGRAM} />
          <SocialButton socialType={SocialTypeEnum.LINKEDIN} />
          <SocialButton socialType={SocialTypeEnum.GITHUB} />
        </div>

        <nav className={styles.navbar}>
          <ul>
            <li>
              <div className={classNames(styles.item, styles.active)}>
                <span>Home</span>
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <span>About</span>
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <span>Resume</span>
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <span>Article</span>
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <span>Contact</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
