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
    'h-11 grid place-items-center rounded-xl w-full font-bold text-white',
    {
      'bg-gradient-to-r from-blue-500 to-blue-700': variant === 'primary',
    },
    { 'bg-transparent border border-zinc-500': variant === 'ghost' },
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
