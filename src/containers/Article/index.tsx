import { ArticleItem } from '@/common/components/ArticleItem';
import { SectionTitle } from '@/common/components/SectionTitle';
import classNames from 'classnames';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './index.module.scss';

export const Article: FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="article" className={styles.section}>
      <div className={styles.container}>
        <SectionTitle title="Article" />
        <div className={styles.title}>
          <p>Here are some of my articles, I hope you will enjoy reading it !!</p>
        </div>
        <div ref={ref} className={classNames(styles.listArticles, { [styles.inView]: inView })}>
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </div>
      </div>
    </section>
  );
};
