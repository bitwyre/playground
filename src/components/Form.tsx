import { useForm } from 'react-hook-form';
import { FormData } from '../types';
import { FormField } from '../components';
import { useLocation } from 'preact-iso';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { route } = useLocation();

  const onSubmit = async (data: FormData) => {
    console.log('Data submitted', data);
    route('/face-verification-onboarding');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-md space-y-4'
    >
      <FormField
        label='Identity Card Type'
        type='string'
        placeholder='e.g. Passport'
        name='identityCardType'
        defaultValue='KTP'
        register={register}
        error={errors.identityCardType}
        disabled
      />
      <FormField
        label='ID Number'
        type='string'
        placeholder='e.g. 3874837826254875'
        name='identityCardNumber'
        defaultValue='928372527383027254'
        register={register}
        error={errors.identityCardNumber}
      />
      <FormField
        label='Nationality'
        type='string'
        placeholder='e.g. Indonesia'
        name='nationality'
        defaultValue='Indonesia'
        register={register}
        error={errors.nationality}
      />
      <FormField
        label='Name'
        type='string'
        placeholder='e.g. Gea Andini'
        name='name'
        defaultValue='Gea Andini'
        register={register}
        error={errors.name}
      />
      <FormField
        label='Place of Birth'
        type='string'
        placeholder='e.g. Jakarta'
        name='placeOfBirth'
        defaultValue='Jakarta'
        register={register}
        error={errors.placeOfBirth}
      />
      <FormField
        label='Date of Birth'
        type='date'
        placeholder='e.g. 1989-07-24'
        name='dateOfBirth'
        defaultValue='1989-07-24'
        register={register}
        error={errors.dateOfBirth}
      />
      <FormField
        label='Address'
        type='string'
        placeholder='e.g. Jalan Mekar Sari No. 64, RT 01/08'
        name='address'
        defaultValue='Jalan Mekar Sari No. 64, RT 01/08'
        register={register}
        error={errors.address}
      />
      <FormField
        label='Province'
        type='string'
        placeholder='e.g. DKI Jakarta'
        name='province'
        defaultValue='DKI Jakarta'
        register={register}
        error={errors.province}
      />
      <FormField
        label='City'
        type='string'
        placeholder='e.g. Jakarta Pusat'
        name='city'
        defaultValue='Jakarta Pusat'
        register={register}
        error={errors.city}
      />
      <FormField
        label='Postal Code'
        type='string'
        placeholder='e.g. 40827'
        name='postCode'
        defaultValue='40827'
        register={register}
        error={errors.postCode}
      />
      <button
        type='submit'
        className='w-full bg-blue-800 text-white text-lg font-medium uppercase h-12 rounded-xl hover:bg-blue-600'
      >
        Submit
      </button>
    </form>
  );
};
