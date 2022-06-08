import classNames from 'classnames';
import styles from './index.module.scss';

interface Props {
  outline?: boolean;
  className?: string;
  children?: JSX.Element | React.ReactNode;
  onClick: () => void;
}

export const AnimatedButton: React.FC<Props> = ({ outline, className, onClick, children }) => {
  return (
    <button
      className={classNames(
        {
          [styles.buttonOutline]: outline,
          [styles.button]: !outline,
        },
        className
      )}
      onClick={onClick}
    >
      <span className={styles.text}>{children}</span>
    </button>
  );
};
