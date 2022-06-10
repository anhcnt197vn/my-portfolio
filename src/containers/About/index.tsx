import { SectionTitle } from '@/common/components/SectionTitle';
import { ChevronRightIcon } from '@/common/icons';
import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './index.module.scss';

export const About: FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <SectionTitle title="About" />
        <div className={styles.title}>
          <p>Hi there! Thanks for visiting my portfolio.</p>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div ref={ref} className={styles.content}>
          <div className={classNames(styles.avatar, { [styles.inView]: inView })}>
            <Image src="/images/avatar-back.png" alt="avatar-back" layout="fill" objectFit="contain" />
          </div>
          <div className={classNames(styles.rightContent, { [styles.inView]: inView })}>
            <h3>Web Developer & Mobile Developer.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className={styles.list}>
              <ul>
                <li>
                  <ChevronRightIcon />
                  <strong>Name:</strong>
                  <span>Cao Ngọc Tuấn Anh</span>
                </li>
                <li>
                  <ChevronRightIcon />
                  <strong>Birthday:</strong>
                  <span>9 October 1997</span>
                </li>
                <li>
                  <ChevronRightIcon />
                  <strong>Age:</strong>
                  <span>25</span>
                </li>
                <li>
                  <ChevronRightIcon />
                  <strong>Degree:</strong>
                  <span>Master</span>
                </li>
                <li>
                  <ChevronRightIcon />
                  <strong>Email:</strong>
                  <span>anhcnt197@gmail.com</span>
                </li>
                <li>
                  <ChevronRightIcon />
                  <strong>Address:</strong>
                  <span>Ha Noi, Viet Nam</span>
                </li>
                <li>
                  <ChevronRightIcon />
                  <strong>Freelance:</strong>
                  <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
