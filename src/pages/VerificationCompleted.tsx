import { ButtonLink, Container, CopyText } from '../components';
import VerificationCompletedImage from '../assets/verification-completed-image.png';

export const VerificationCompleted = () => {
  return (
    <section>
      <Container>
        <CopyText
          heading='KYC Verification Completed'
          subheading='You will get an email once your documents have been approved. We appreciate your patience.'
        />
        <img
          src={VerificationCompletedImage}
          alt='Verification is completed'
          className='my-8'
        />
        <ButtonLink link='/' className='max-w-xs'>
          Back to profile
        </ButtonLink>
      </Container>
    </section>
  );
};
