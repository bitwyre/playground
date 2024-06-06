type CopyTextProps = {
  heading: string;
  subheading: string;
};

export const CopyText = ({ heading, subheading }: CopyTextProps) => {
  return (
    <div className='text-center space-y-4'>
      <h1>{heading}</h1>
      <p>{subheading}</p>
    </div>
  );
};
