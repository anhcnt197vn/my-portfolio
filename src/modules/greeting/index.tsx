import Image from 'next/image';
import { AnimatedButton } from '@/common/components/AnimatedButton';
import { TextTypeAnimation } from '@/common/components/TextTypeAnimation';
import { useWindowSize } from '@/common/hooks/useWindowSize';
import { DownloadIcon, EmailIcon } from '@/common/icons';
import styles from './index.module.scss';

export const Greeting: React.FC = () => {
  const { width } = useWindowSize();

  const imageSize = width! <= 1440 ? 400 : 450;

  return (
    <section className={styles.greeting}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <h4>Hi</h4>
          <h2>
            I'm <span>B r o w n</span>
          </h2>
          <TextTypeAnimation
            sentences={['Web Developer', 'Mobile Developer', 'Blogger . . . ']}
            className={styles.text}
          />
          <h4 className={styles.hobbies}>I have a passion for technology.</h4>
          <div className={styles.buttonContainer}>
            <AnimatedButton className={styles.button} onClick={() => {}}>
              <EmailIcon />
              <span className={styles.content}>Email me</span>
            </AnimatedButton>
            <AnimatedButton outline className={styles.button} onClick={() => {}}>
              <DownloadIcon />
              <span className={styles.content}>Resume</span>
            </AnimatedButton>
          </div>
        </div>
        <div className={styles.rightContent}>
          <Image
            src="/images/hero.png"
            width={imageSize}
            height={imageSize}
            layout="fixed"
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
};
