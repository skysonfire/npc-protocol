import React, { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'md' | 'lg' | 'xl' | 'full';
}

const Container = ({
  children,
  maxWidth = 'xl',
  className = '',
  ...props
}: ContainerProps) => {
  const maxWidthClasses = {
    md: 'max-w-3xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  const classes = `mx-auto px-md sm:px-lg lg:px-xl ${maxWidthClasses[maxWidth]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Container;
