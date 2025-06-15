import React from 'react';

interface HorizontalScrollContainerProps {
  children: React.ReactNode;
  className?: string;
}

const HorizontalScrollContainer: React.FC<HorizontalScrollContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`
        flex
        overflow-x-auto         /* Enables horizontal scrolling */
        whitespace-nowrap      /* Prevents content from wrapping to the next line */
        scrollbar-hide         /* Custom utility to hide scrollbar (from globals.css) */
        scroll-smooth          /* Makes scrolling smooth when programmatically triggered (e.g., by arrow buttons) */
        snap-x snap-mandatory  /* Makes items "snap" into view when scrolling stops */
        px-4 py-2              /* Horizontal padding for the "peek" effect on sides */
        -mx-4                  /* Counteract the padding to make full-width parent stretch */
        ${className || ''}
      `.trim()}
    >
      {children}
    </div>
  );
};

export default HorizontalScrollContainer;