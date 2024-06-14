import { ButtonClose, Container, CopyText, CtaCapture } from '../components';
import OnboardingImage from '../assets/onboarding-image.png';
import CardImage from '../assets/id-card.png';
import CameraImage from '../assets/camera.png';

export const Onboarding = () => {
  return (
    <section>
      <Container>
        <ButtonClose className='fixed top-[19px] left-[17px]' />
        <CopyText
          heading="Let's verify KYC"
          subheading='Please submit the following documents to verify&nbsp;your&nbsp;identity'
        />
        <img
          src={OnboardingImage}
          alt='Onboarding image'
          className='mt-12 mb-8'
        />
        <div className='grid gap-3 max-w-md mx-auto'>
          <CtaCapture
            image={CardImage}
            link='/capture-document-options'
            text='Take a picture of your valid ID'
            subtext='To check your personal informations are correct'
          />
          <CtaCapture
            image={CameraImage}
            link='/capture-selfie'
            text='Take a selfie'
            subtext='To check your face to your ID picture'
          />
        </div>
        <button
          type='button'
          className='text-sm fixed right-4 bottom-5 hover:text-slate-50 underline hover:no-underline'
        >
          Why is this needed?
        </button>
      </Container>
    </section>
  );
};
