import { X } from 'lucide-preact';
import { cn } from '../utils/cn';

export const ButtonClose = ({
  link = '/',
  className,
}: {
  link?: string;
  className?: string;
}) => {
  const styles = cn(
    'block rounded-full bg-gradient-to-r from-[#040A11] to-slate-50/60 p-[1px] z-10',
    className
  );

  return (
    <a href={link} className={styles}>
      <span className='grid place-items-center w-7 h-7 bg-gradient-to-r from-[#040A11] via-[#040A11] to-100% to-slate-900/10 rounded-full text-slate-50'>
        <X />
      </span>
    </a>
  );
};
