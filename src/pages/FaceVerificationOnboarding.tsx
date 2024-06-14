import { CircleUserRound } from 'lucide-preact';
import { ButtonClose, ButtonLink, Container, CopyText } from '../components';

import FaceVerificationImage from '../assets/face-verification-image.png';

export const FaceVerificationOnboarding = () => {
  return (
    <section>
      <Container>
        <ButtonClose link='/' className='fixed top-[19px] left-[17px]' />
        <CopyText
          heading='Face Verification'
          subheading="This step is required to prove that it's you"
          className='space-y-0'
        />
        <img
          src={FaceVerificationImage}
          alt='Face verifiaction illustration'
          className='my-6'
        />
        <ol className='text-center text-slate-50 font-bold space-y-1'>
          <li>Keep enough lighting</li>
          <li>Keep face inside the rectangle</li>
          <li>Please folloe the instructions</li>
        </ol>
        <div className='w-full max-w-64 space-y-3 mt-8'>
          <ButtonLink
            link='/capture-selfie'
            className='h-11 grid place-items-center rounded-xl w-full'
          >
            Open camera
          </ButtonLink>
          <ButtonLink
            link='/capture-document/id-card/result-preview'
            variant='ghost'
            className='h-11 grid place-items-center rounded-xl w-full'
          >
            Back
          </ButtonLink>
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
