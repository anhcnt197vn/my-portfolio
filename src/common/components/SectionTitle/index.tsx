import { FC } from 'react';
import styles from './index.module.scss';

interface Props {
  title: string;
}

export const SectionTitle: FC<Props> = ({ title }) => {
  return <h2 className={styles.headingTitle}>{title}</h2>;
};
