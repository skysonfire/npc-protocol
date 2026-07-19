import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface ButtonOwnProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  /** If provided, renders an anchor styled as a button instead of a <button> element. */
  href?: string;
}

type ButtonProps = ButtonOwnProps & ButtonHTMLAttributes<HTMLButtonElement>;

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent active:scale-[0.98]';

const variantClasses = {
  primary: 'bg-brand text-surface hover:bg-brand-dark',
  secondary: 'bg-accent text-surface hover:opacity-90',
  outline: 'border border-brand text-brand hover:bg-brand hover:text-surface',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-6 py-3 text-lg',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  href,
  className = '',
  ...props
}: ButtonProps) => {
  const widthClass = fullWidth ? 'w-full' : '';
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
