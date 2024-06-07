import { useState } from 'preact/hooks';
import { Capture, Container } from '../components';
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
        <Capture image={image} setImage={setImage} onSubmit={onSubmit} />
      </Container>
    </section>
  );
};
