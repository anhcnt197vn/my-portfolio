import Image from 'next/image';
import { AnimatedButton } from '@/common/components/AnimatedButton';
import { TextTypeAnimation } from '@/common/components/TextTypeAnimation';
import { useWindowSize } from '@/common/hooks/useWindowSize';
import { DownloadIcon, EmailIcon } from '@/common/icons';
import styles from './index.module.scss';

export const Hero: React.FC = () => {
  const { width } = useWindowSize();

  const getImageSize = () => {
    if (!width) {
      return 0;
    }

    if (width < 766) {
      return 300;
    }

    if (width < 1200) {
      return 350;
    }

    if (width < 1440) {
      return 400;
    }

    return 450;
  };

  return (
    <section id="hero" className={styles.greeting}>
      <div className={styles.container}>
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
            <p className={styles.hobbies}>I have a passion for technology.</p>
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
              width={getImageSize()}
              height={getImageSize()}
              layout="fixed"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
