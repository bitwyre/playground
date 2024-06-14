import { useState } from 'preact/hooks';
import { ButtonClose, Capture, Container } from '../components';
import { useLocation } from 'preact-iso';

export const CaptureDocument = () => {
  const { url, route } = useLocation();

  const [image, setImage] = useState<string | null>(null);

  const onSubmit = () => {
    route(url + '/result-preview');
  };

  return (
    <section>
      <Container>
        <ButtonClose
          link='/capture-document-options'
          className='fixed top-[19px] left-[17px]'
        />
        <Capture
          type={url.includes('/passport') ? 'passport' : 'card'}
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
