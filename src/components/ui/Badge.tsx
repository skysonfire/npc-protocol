import React, { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent';
}

const Badge = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: BadgeProps) => {
  const variantClasses = {
    primary: 'bg-brand text-surface',
    secondary: 'bg-surface text-text-primary border border-brand',
    accent: 'bg-accent text-surface',
  };

  const classes = `inline-flex items-center px-sm py-xs rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`;

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;
