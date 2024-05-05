import * as React from 'react';
import { cn } from '@/lib/utils';

export interface GutterProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly left?: boolean;
  readonly right?: boolean;
}

const Gutter = React.forwardRef<HTMLDivElement, GutterProps>(
  ({ className, children, left = true, right = true, ...props }, ref) => {
    return (
      <div
        className={cn(
          'container',
          !left && 'pl-0',
          !right && 'pr-0',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Gutter.displayName = 'Gutter';

export { Gutter };
