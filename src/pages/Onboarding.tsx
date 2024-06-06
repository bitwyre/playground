import { Camera, CreditCard, ScanFace } from 'lucide-preact';
import { Container, CopyText, CtaCapture } from '../components';

export const Onboarding = () => {
  return (
    <section>
      <Container>
        <CopyText
          heading="Let's Verify KYC"
          subheading='Please submit the following documents to verify your identity'
        />
        <ScanFace
          width={140}
          height={140}
          className='text-slate-50 mx-auto my-12'
        />
        <div className='grid gap-4'>
          <CtaCapture
            icon={CreditCard}
            link='/capture-id-options'
            text='Take a picture of your valid ID'
            subtext='To check your personal informations are correct'
          />
          <CtaCapture
            icon={Camera}
            link='/capture-selfie'
            text='Take a selfie'
            subtext='To check your face to your ID picture'
          />
        </div>
          <button
            type='button'
            className='text-sm text-center fixed left-1/2 bottom-4 -translate-x-1/2 hover:text-slate-50'
          >
            Why is this needed?
          </button>
      </Container>
    </section>
  );
};
