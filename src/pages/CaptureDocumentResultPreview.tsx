import { Container, CopyText, Form, FormField } from '../components';

export const CaptureDocumentResultPreview = () => {
  return (
    <section>
      <Container className='space-y-10'>
        <CopyText
          heading='KYC Preview'
          subheading='Make sure the data scanned are correct'
        />
        <Form />
      </Container>
    </section>
  );
};
