import React, { FC, memo, useEffect } from 'react';

import styles from './Modal.module.scss';
import cn from 'classnames';

type Props = {
  onClose: () => void;
  wrapWithoutPadding?: boolean;
  children: React.ReactNode;
};

export const Modal: FC<Props> = memo(({ onClose, wrapWithoutPadding, children }) => {
  const appearances = {
    [styles.wrapWithoutPadding]: wrapWithoutPadding,
  };
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div
      className={styles.root}
      onClick={(e) => {
        console.log('1');
        e.stopPropagation();
        onClose();
      }}>
      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        <button className={styles.cross} type="button" onClick={onClose} title="Закрыть">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
              fill="#C8C8C9"
            />
          </svg>
        </button>
        <div className={cn(styles.wrap, appearances)}>{children}</div>
      </div>
    </div>
  );
});
