import { BadgeCheck } from 'lucide-preact';
import { ButtonLink, Container, CopyText } from '../components';

export const VerificationCompleted = () => {
  return (
    <section>
      <Container>
        <CopyText
          heading='KYC Verification Completed'
          subheading='You will get an email once your documents have been approved. We appreciate your patience.'
        />
        <BadgeCheck width={120} height={120} className='text-blue-600 mt-14 mb-16' />
        <ButtonLink link='/' className='max-w-xs'>
          Back to profile
        </ButtonLink>
      </Container>
    </section>
  );
};
