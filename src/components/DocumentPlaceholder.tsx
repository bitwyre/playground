import CardPlaceholder from '../assets/card-placeholder.png';
import FacePlaceholder from '../assets/face-placeholder.png';

export const DocumentPlaceholder = ({
  type,
}: {
  type: 'card' | 'passport' | 'selfie';
}) => {
  return (
    <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 space-y-3'>
      <img
        src={type === 'card' ? CardPlaceholder : FacePlaceholder}
        alt='placeholder'
        className='w-full'
      />
      <div className='text-white w-[332px] text-center'>
        {type === 'selfie' ? (
          <>
            <p className='font-bold text-[28px] whitespace-nowrap mb-1'>
              Take photo front
            </p>
            <p className='text-xs'>
              Make sure your face is inside <br /> the box and capture a photo
            </p>
          </>
        ) : (
          <>
            <p className='font-bold text-[28px] whitespace-nowrap mb-1'>
              Center Properly
            </p>
            <p className='text-xs'>Place ID on a plain surface</p>
            <p className='text-xs'>Confirm online ID visible and clear</p>
          </>
        )}
      </div>
    </div>
  );
};
