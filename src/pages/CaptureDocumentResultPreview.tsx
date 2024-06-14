import {
  ButtonClose,
  Container,
  CopyText,
  Form,
} from '../components';

export const CaptureDocumentResultPreview = () => {
  return (
    <section>
      <Container className='space-y-10 items-start py-20'>
        <ButtonClose className='fixed top-[19px] left-[17px]' />
        <CopyText
          heading='KYC Preview'
          subheading='Make sure the data entered is correct'
          className='text-left space-y-0'
        />
        <Form />
        <button
          type='button'
          className='text-sm fixed right-4 bottom-5 hover:text-slate-50 underline hover:no-underline'
        >
          Need help?
        </button>
      </Container>
    </section>
  );
};
