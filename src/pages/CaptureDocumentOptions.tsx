import { CreditCard, File, FileText, UserRound } from "lucide-preact";
import { Container, CopyText, CtaCapture } from "../components";

export const CaptureDocumentOptions = () => {
  return (
    <section>
      <Container>
        <CopyText
          heading='Upload proof of your identity'
          subheading='Choose the document type you wish to submit'
        />
        <UserRound
          width={140}
          height={140}
          className='text-slate-50 mx-auto my-12'
        />
        <div className='grid gap-3 max-w-md mx-auto'>
          <CtaCapture
            link='/capture-document/id-card'
            icon={CreditCard}
            text='ID Card'
          />
          <CtaCapture link='/capture-document/passport' icon={File} text='Passport' />
          <CtaCapture
            link='/capture-document/driver-license'
            icon={FileText}
            text='Driver License'
          />
        </div>
        <a
          href='#'
          className='text-sm text-center fixed left-1/2 bottom-4 -translate-x-1/2 hover:text-slate-50'
        >
          Need help?
        </a>
      </Container>
    </section>
  );
};
