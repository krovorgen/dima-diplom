import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, FC } from 'react';

import cn from 'classnames';

type ComponentProps = {
  href?: string;
  loading?: boolean;
  center?: boolean;
  block?: boolean;
  variant?: 'base' | 'base-outline';
  size?: 'md' | 'lg';
  withoutBorder?: boolean;
  Component?: ElementType;
};

type AnchorButtonProps = ComponentProps & AnchorHTMLAttributes<HTMLAnchorElement>;
type NativeButtonProps = ComponentProps & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = Partial<AnchorButtonProps | NativeButtonProps>;

export const Button: FC<ButtonProps> = ({
  href,
  children,
  loading,
  center,
  block,
  variant = 'base',
  withoutBorder,
  size = 'md',
  Component = href ? 'a' : 'button',
  ...rest
}) => {
  const appearances = {
    'btn--100': block,
    'btn--without-border': withoutBorder,
  };
  return (
    <Component className={cn('btn', `btn--${size}`, `btn--${variant}`, appearances)} {...rest}>
      {children}
    </Component>
  );
};
