/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, InputHTMLAttributes, memo } from 'react';

import cn from 'classnames';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  addClass?: string;
}

export const Input: FC<InputProps> = memo(({ width = '100%', addClass, ...props }) => {
  return (
    <label className={cn(styles.label, addClass)}>
      <input className={cn(styles.input)} style={{ width }} {...props} />
    </label>
  );
});
