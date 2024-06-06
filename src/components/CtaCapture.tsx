import { ChevronRight, LucideIcon } from 'lucide-preact';

type CtaCaptureProps = {
  link: string;
  icon: LucideIcon;
  text: string;
  subtext: string;
};

export const CtaCapture = ({ link, icon, text, subtext }: CtaCaptureProps) => {
  const Icon = icon;

  return (
    <a
      href={link}
      className='grid grid-cols-[auto_1fr_auto] gap-3 items-center border border-slate-800 px-3 py-2 bg-slate-950 hover:bg-slate-900 hover:shadow-2xl rounded-xl md:gap-4 md:px-4 md:py-3'
    >
      <Icon width={30} height={30} className='text-slate-50' />
      <div>
        <p className='font-medium text-slate-50 md:text-lg'>{text}</p>
        <p className='text-sm'>{subtext}</p>
      </div>
      <ChevronRight width={18} height={18} />
    </a>
  );
};
