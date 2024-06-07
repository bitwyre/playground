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
        <label htmlFor={name} className='text-slate-50 font-medium'>
          {label}
        </label>
        <input
          id={name}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...register(name)}
          className='w-full bg-slate-900 border border-slate-400 py-2 px-3 text-slate-50 rounded-lg'
          disabled={disabled}
        />
      </div>
      {error && (
        <span className='text-[12px] text-red-500'>{error.message}</span>
      )}
    </div>
  );
};
