import { useState } from 'preact/hooks';
import { useLocation } from 'preact-iso';
import { ButtonClose, Capture, Container } from '../components';

export const CaptureSelfie = () => {
  const { route } = useLocation();

  const [image, setImage] = useState<string | null>(null);

  const onSubmit = () => {
    route('/verification-completed');
  };

  return (
    <section>
      <Container>
        <ButtonClose
          link='/face-verification-onboarding'
          className='fixed top-[19px] left-[17px]'
        />
        <Capture
          type='selfie'
          image={image}
          setImage={setImage}
          onSubmit={onSubmit}
        />
        <button
          type='button'
          className='text-sm fixed right-4 top-5 text-white hover:text-slate-50 underline hover:no-underline'
        >
          Help
        </button>
      </Container>
    </section>
  );
};
