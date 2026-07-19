"use client";

import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  shadow?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
}

const Card = ({
  children,
  shadow = 'md',
  rounded = 'md',
  className = '',
  ...props
}: CardProps) => {
  const shadowClasses = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  };
  
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl"
  };
  
  const classes = `bg-surface ${shadowClasses[shadow]} ${roundedClasses[rounded]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;