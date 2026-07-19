import React from 'react';
import { ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  /** Descriptive text used both as visible caption and for context. Required for a11y. */
  alt: string;
  /** Aspect ratio utility class, e.g. 'aspect-video', 'aspect-square', 'aspect-[4/3]' is NOT allowed (arbitrary value) - use aspect-video/aspect-square only. */
  aspect?: 'aspect-video' | 'aspect-square';
  className?: string;
  rounded?: 'sm' | 'md' | 'lg';
}

/**
 * Intentional, clearly-labeled placeholder for an image slot that will be wired up later.
 * Renders as a role="img" element with the real alt text so screen readers announce
 * what content is intended to go here, rather than a decorative dashed box.
 */
const ImagePlaceholder = ({
  alt,
  aspect = 'aspect-video',
  className = '',
  rounded = 'lg',
}: ImagePlaceholderProps) => {
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
  };

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex w-full flex-col items-center justify-center gap-3 border border-text-secondary/20 bg-surface-alt ${aspect} ${roundedClasses[rounded]} ${className}`}
    >
      <ImageIcon aria-hidden="true" className="h-8 w-8 text-text-secondary/50" strokeWidth={1.5} />
      <p className="max-w-[80%] text-center text-sm text-text-secondary/70">{alt}</p>
    </div>
  );
};

export default ImagePlaceholder;
