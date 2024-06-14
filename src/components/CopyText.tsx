import { cn } from '../utils/cn';

type CopyTextProps = {
  heading: string;
  subheading: string;
  className?: string;
};

export const CopyText = ({ heading, subheading, className }: CopyTextProps) => {
  return (
    <div className={cn('text-center space-y-2 md:space-y-3', className)}>
      <h1>{heading}</h1>
      <p>{subheading}</p>
    </div>
  );
};
