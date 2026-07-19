import React from 'react';

interface AvatarProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-10 w-10 text-sm',
  md: 'h-12 w-12 text-base',
  lg: 'h-16 w-16 text-lg',
};

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

/**
 * Intentional monogram avatar used wherever a real photo is not yet available.
 * Uses only design tokens (brand/accent) so it reads as a deliberate brand element,
 * not a broken image placeholder.
 */
const Avatar = ({ name, src, size = 'md', className = '' }: AvatarProps) => {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt={name}
        className={`${sizeClasses[size]} rounded-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={name}
      className={`flex flex-shrink-0 items-center justify-center rounded-full bg-brand font-heading font-semibold text-surface ${sizeClasses[size]} ${className}`}
    >
      {getInitials(name)}
    </div>
  );
};

export default Avatar;
