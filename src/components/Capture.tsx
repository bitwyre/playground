import { useEffect, useRef, useCallback } from 'preact/hooks';
import { CapturedDocument, DocumentPlaceholder } from '../components';

import CamerButtonImage from '../assets/camera-button.png';

type CaptureProps = {
  type?: 'card' | 'passport' | 'selfie';
  image: string | null;
  setImage: (value: string | null) => void;
  onSubmit: () => void;
};

export const Capture = ({
  type = 'card',
  image,
  setImage,
  onSubmit,
}: CaptureProps) => {
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
        <CapturedDocument
          type={type}
          capturedImage={image}
          retakeImage={retakeImage}
          onSubmit={onSubmit}
        />
      ) : (
        <div>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className='w-full h-full object-cover transform scale-x-[-1] fixed top-0 left-0 right-0 bottom-0'
          />
          <DocumentPlaceholder type={type} />
          <button
            onClick={captureImage}
            className='w-14 h-14 grid place-items-center fixed bottom-8 left-1/2 -translate-x-1/2'
          >
            <img src={CamerButtonImage} alt='Camera button' />
          </button>
        </div>
      )}
    </div>
  );
};
