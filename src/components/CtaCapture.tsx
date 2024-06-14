import { ChevronRight } from 'lucide-preact';
import { cn } from '../utils/cn';

type CtaCaptureProps = {
  link: string;
  image: string;
  text: string;
  subtext?: string;
  className?: string;
};

export const CtaCapture = ({
  link,
  image,
  text,
  subtext,
  className,
}: CtaCaptureProps) => {
  return (
    <a
      href={link}
      className={cn(
        'grid grid-cols-[auto_1fr_auto] gap-4 items-center border border-zinc-400 bg-[#040A11] hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:border-transparent hover:shadow-2xl rounded-xl md:gap-4 px-3 py-4 md:px-5 md:py-6 hover:text-white',
        className
      )}
    >
      <img src={image} alt='image icon' />
      <div>
        <p className='font-medium text-white md:text-lg'>{text}</p>
        <p className='text-sm'>{subtext}</p>
      </div>
      <ChevronRight width={24} height={24} />
    </a>
  );
};
