import React, { FC, useEffect, useState } from 'react';
import { SocialButton } from '@/common/components/SocialButton';
import { SocialTypeEnum } from '@/common/utils/types';
import { AvatarFlip } from '@/common/components/AvatarFlip';
import { MenuItems } from '@/store/slices/menuItemSlice';
import styles from './index.module.scss';
import { CloseIcon, MenuIcon } from '@/common/icons';
import classNames from 'classnames';

const menuItems = [
  {
    href: '#hero',
    item: MenuItems.HOME,
    name: 'Home',
  },
  {
    href: '#about',
    item: MenuItems.ABOUT,
    name: 'About',
  },
  {
    href: '#article',
    item: MenuItems.ARTICLE,
    name: 'Article',
  },
  {
    href: '#resume',
    item: MenuItems.RESUME,
    name: 'Resume',
  },
  {
    href: '#contact',
    item: MenuItems.CONTACT,
    name: 'Contact',
  },
];

export const SideBar: FC = () => {
  const [isCollapsed, setCollapsed] = useState<boolean>(true);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li');

    const handleScroll = () => {
      let current: any = '';
      const defaultHeight = sections.item(0)?.clientHeight || 0;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY + defaultHeight > sectionTop + section.clientHeight / 2) {
          current = section.getAttribute('id');
        }
      });

      navLi.forEach((li) => {
        li.classList.remove(styles.active);
        if (li.id?.replace('id_', '') === current) {
          li.classList.add(styles.active);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenuButton = () => {
    setCollapsed(!isCollapsed);
  };

  const handleMenuClicked = (menuItem: MenuItems) => {
    setCollapsed(true);
    document.getElementById(menuItem)?.scrollIntoView();
  };

  return (
    <>
      <header className={classNames(styles.sidebarContainer, { [styles.active]: !isCollapsed })}>
        <div className={styles.profile}>
          <AvatarFlip />
          <div className={styles.socialLinks}>
            <SocialButton socialType={SocialTypeEnum.FACEBOOK} link="https://www.google.com/" />
            <SocialButton socialType={SocialTypeEnum.INSTAGRAM} link="https://www.google.com/" />
            <SocialButton socialType={SocialTypeEnum.LINKEDIN} link="https://www.google.com/" />
            <SocialButton socialType={SocialTypeEnum.GITHUB} link="https://www.google.com/" />
          </div>
          <nav className={styles.navbar} id="navbar">
            <ul>
              {menuItems.map((menuItem) => {
                return (
                  <li
                    id={`id_${menuItem.item}`}
                    key={menuItem.item}
                    className={styles.item}
                    onClick={() => {
                      handleMenuClicked(menuItem.item);
                    }}
                  >
                    <span>{menuItem.name}</span>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
      <button className={styles.toggleButton} onClick={toggleMenuButton}>
        {isCollapsed ? <MenuIcon className={styles.menuIcon} /> : <CloseIcon className={styles.menuIcon} />}
      </button>
    </>
  );
};
