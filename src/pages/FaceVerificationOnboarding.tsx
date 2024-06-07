import { CircleUserRound } from 'lucide-preact';
import { ButtonLink, Container, CopyText } from '../components';

export const FaceVerificationOnboarding = () => {
  return (
    <section>
      <Container>
        <CopyText
          heading='Face Verification'
          subheading="This step is required to prove that it's you"
        />
        <CircleUserRound
          width={130}
          height={130}
          className='text-slate-50 my-12'
        />
        <ol className='text-center text-slate-50 font-medium text-lg space-y-1'>
          <li>Keep enough lighting</li>
          <li>Keep face inside the rectangle</li>
          <li>Please folloe the instructions</li>
        </ol>
        <div className='w-full max-w-64 space-y-3 mt-8'>
          <ButtonLink
            link='/capture-selfie'
            className='bg-blue-800 text-slate-50 h-11 grid place-items-center rounded-xl w-full'
          >
            Open camera
          </ButtonLink>
          <ButtonLink
            link='/capture-document/id-card/result-preview'
            variant='ghost'
            className='bg-transparent border border-slate-800 h-11 grid place-items-center rounded-xl w-full'
          >
            Back
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
};
