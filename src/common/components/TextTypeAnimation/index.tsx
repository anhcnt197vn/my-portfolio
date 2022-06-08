import classNames from 'classnames';
import React, { useRef } from 'react';
import Typed from 'typed.js';

interface Props {
  className?: string;
  sentences: string[];
}

export const TextTypeAnimation: React.FC<Props> = ({ className, sentences }) => {
  const el = useRef<HTMLHeadingElement>(null);
  const typed = useRef<any>(null);

  React.useEffect(() => {
    const options = {
      strings: sentences,
      typeSpeed: 50,
      backSpeed: 50,
    };

    typed.current = new Typed(el.current!, options);

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <div className={className}>
      <span ref={el} />
    </div>
  );
};
