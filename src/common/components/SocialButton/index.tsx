import styles from './index.module.scss';
import Image from 'next/image';
import { SocialTypeEnum } from '@/common/utils/types';
import classNames from 'classnames';

const socialImages = {
  facebook: '/images/facebook.png',
  linkedin: '/images/linkedin.png',
  instagram: '/images/instagram.png',
  github: '/images/github.png',
};

interface Props {
  socialType: SocialTypeEnum;
  link?: string;
}

export const SocialButton: React.FC<Props> = ({ socialType, link }) => {
  return (
    <a href={link || '#'} className={styles.container}>
      <div className={classNames(styles.content, { [styles.border]: socialType === SocialTypeEnum.GITHUB })}>
        <Image src={socialImages[socialType]} layout="fill" />
      </div>
    </a>
  );
};
