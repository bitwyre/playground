import { ButtonLink, Container, CopyText } from '../components';

export function NotFound() {
  return (
    <section>
      <Container className='space-y-20'>
        <CopyText
          heading='404 Not Found'
          subheading="The page you are looking for doesn't exist."
        />
        <ButtonLink link='/' className='max-w-xs'>Back home</ButtonLink>
      </Container>
    </section>
  );
}
