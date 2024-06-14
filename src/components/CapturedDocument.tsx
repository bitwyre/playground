import { Check, RefreshCcw } from 'lucide-preact';

type CapturedDocumentProps = {
  type: 'card' | 'passport';
  capturedImage: string;
  retakeImage: () => void;
  onSubmit: () => void;
};

export const CapturedDocument = ({
  type,
  capturedImage,
  retakeImage,
  onSubmit,
}) => {
  return (
    <div className='space-y-8'>
      <img
        src={capturedImage}
        alt='captured image'
        className='w-full h-full object-cover border border-slate-500 scale-x-[-1]'
      />
      <div class='flex justify-center space-x-4'>
        <button
          class='w-14 h-14 grid place-items-center bg-zinc-600/80 text-zinc-50 rounded-full hover:bg-zinc-300 hover:text-zinc-950'
          onClick={onSubmit}
        >
          <Check />
        </button>
        <button
          onClick={retakeImage}
          className='w-14 h-14 grid place-items-center bg-zinc-600/80 text-zinc-50 rounded-full hover:bg-zinc-300 hover:text-zinc-950'
        >
          <RefreshCcw />
        </button>
      </div>
    </div>
  );
};
