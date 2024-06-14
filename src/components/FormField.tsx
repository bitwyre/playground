import { FunctionComponent } from 'preact';
import { FormFieldProps } from '../types';
import { cn } from '../utils/cn';

export const FormField: FunctionComponent<FormFieldProps> = ({
  type,
  label,
  placeholder,
  name,
  defaultValue,
  register,
  error,
  disabled,
}) => {
  return (
    <div>
      <div className={cn('space-y-2', disabled ? 'opacity-55' : '')}>
        <label htmlFor={name} className='text-white font-medium'>
          {label}
        </label>
        <input
          id={name}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...register(name)}
          className='w-full bg-[#040A11] border border-white py-2 px-3 text-white rounded-lg'
          disabled={disabled}
        />
      </div>
      {error && (
        <span className='text-[12px] text-red-500'>{error.message}</span>
      )}
    </div>
  );
};
