import { ComponentChildren } from 'preact';
import { cn } from '../utils/cn';

type ContainerProps = {
  className?: string;
  children: ComponentChildren;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('w-full max-w-xl mx-auto min-h-svh py-8 px-4', className)}>
      {children}
    </div>
  );
};
