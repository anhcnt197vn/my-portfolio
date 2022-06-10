import { FC } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';

export const ArticleItem: FC = () => {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.thumbnail}>
        <Image src="/images/greeting-bg.webp" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.content}>
        <div className={styles.tag}># NextJS</div>
        <a className={styles.title}>
          <h1>The React Framework for Production</h1>
        </a>
        <div className={styles.description}>
          Next.js gives you the best developer experience with all the features you need for production: hybrid static &
          server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
        </div>
      </div>
    </div>
  );
};
