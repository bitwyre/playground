import { useState } from 'preact/hooks';
import { useLocation } from 'preact-iso';
import { Capture, Container } from '../components';

export const CaptureSelfie = () => {
  const { route } = useLocation();

  const [image, setImage] = useState<string | null>(null);

  const onSubmit = () => {
    route('/verification-completed');
  };

  return (
    <section>
      <Container>
        <Capture image={image} setImage={setImage} onSubmit={onSubmit} />
      </Container>
    </section>
  );
};
