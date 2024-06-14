import { CreditCard, File, FileText, UserRound } from 'lucide-preact';
import { ButtonClose, Container, CopyText, CtaCapture } from '../components';
import OnboardingImage from '../assets/onboarding-image.png';
import CardImage from '../assets/id-card.png';
import PassportImage from '../assets/passport.png';

export const CaptureDocumentOptions = () => {
  return (
    <section>
      <Container>
        <ButtonClose className='fixed top-[19px] left-[17px]' />
        <CopyText
          heading='Upload proof of your identity'
          subheading='Choose a document you wish to submit'
        />
        <img
          src={OnboardingImage}
          alt='Onboarding image'
          className='mt-12 mb-8'
        />
        <div className='grid gap-3 max-w-md mx-auto'>
          <CtaCapture
            link='/capture-document/id-card'
            image={CardImage}
            text='ID Card'
            className='w-80'
          />
          <CtaCapture
            link='/capture-document/passport'
            image={PassportImage}
            text='Passport'
            className='py-2 md:py-4'
          />
          <CtaCapture
            link='/capture-document/driving-license'
            image={CardImage}
            text='Driving License'
          />
        </div>
        <a
          href='#'
          className='text-sm fixed right-4 bottom-5 hover:text-slate-50 underline hover:no-underline'
        >
          Need help?
        </a>
      </Container>
    </section>
  );
};
