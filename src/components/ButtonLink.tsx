import { ComponentChildren } from 'preact';
import { cn } from '../utils/cn';

type ButtonLinkProps = {
  link?: string;
  type?: string;
  variant?: 'primary' | 'ghost';
  className?: string;
  children: ComponentChildren;
  onClick?: () => void;
};

export const ButtonLink = ({
  link,
  type = 'button',
  variant = 'primary',
  className,
  children,
  onClick,
}: ButtonLinkProps) => {
  const buttonLinkStyles = cn(
    'h-11 grid place-items-center rounded-xl w-full',
    { 'bg-blue-800 text-slate-50 hover:bg-blue-600': variant === 'primary' },
    { 'bg-transparent border border-slate-800 ': variant === 'ghost' },
    className
  );

  if (link) {
    return (
      <a href={link} className={buttonLinkStyles}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={buttonLinkStyles} onClick={onClick}>
      {children}
    </button>
  );
};
