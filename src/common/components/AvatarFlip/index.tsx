import Image from 'next/image';
import styles from './index.module.scss';

export const AvatarFlip: React.FC = () => {
  return (
    <div className={styles.avatarBox}>
      <div className={styles.avatarBoxInner}>
        <div className={styles.avatarBoxFront}>
          <Image src="/images/avatar.jpg" layout="fill" quality={80} alt="avatar" />
        </div>
        <div className={styles.avatarBoxBack}>
          <Image src="/images/avatar-back-main.jpg" layout="fill" quality={80} alt="avatar-back" />
        </div>
      </div>
    </div>
  );
};
