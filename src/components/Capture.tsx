import { Camera, Check, X } from 'lucide-preact';
import { useState, useEffect, useRef, useCallback } from 'preact/hooks';

type CaptureProps = {
  image: string | null;
  setImage: (value: string | null) => void;
  onSubmit: () => void;
};

export const Capture = ({ image, setImage, onSubmit }: CaptureProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const accessCamera = useCallback(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        })
        .catch((err) => {
          console.error('Error accessing the camera: ', err);
        });
    }
  }, []);

  useEffect(() => {
    accessCamera();
  }, []);

  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext('2d')?.drawImage(videoRef.current, 0, 0);
      setImage(canvas.toDataURL('image/png'));
    }
  };

  const retakeImage = () => {
    setImage(null);
    accessCamera();
  };

  return (
    <div>
      {image ? (
        <div>
          <img
            src={image}
            alt='captured image'
            className='w-full h-full object-cover border border-slate-300 scale-x-[-1]'
          />
          <div class='flex justify-center space-x-4 fixed bottom-8 left-1/2 -translate-x-1/2'>
            <button
              class='w-14 h-14 grid place-items-center bg-transparent border text-slate-50 rounded-full hover:bg-slate-50 hover:text-slate-950'
              onClick={onSubmit}
            >
              <Check />
            </button>
            <button
              onClick={retakeImage}
              className='w-14 h-14 grid place-items-center bg-transparent border text-slate-50 rounded-full hover:bg-slate-50 hover:text-slate-950'
            >
              <X />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className='w-full h-full object-cover transform scale-x-[-1] fixed top-0 left-0 right-0 bottom-0'
          />
          <div className='absolute h-44 w-72 border-2 border-white/40 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'></div>
          <button
            onClick={captureImage}
            className='w-14 h-14 rounded-full bg-slate-50 text-slate-950 grid place-items-center hover:bg-slate-200 fixed bottom-8 left-1/2 -translate-x-1/2'
          >
            <Camera width={28} height={28} />
          </button>
        </div>
      )}
    </div>
  );
};
