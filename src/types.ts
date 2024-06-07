import { FieldError, UseFormRegister } from 'react-hook-form';

export type FormData = {
  identityCardType: string;
  identityCardNumber: string;
  nationality: string;
  name: string;
  placeOfBirth: string;
  dateOfBirth: string;
  address: string;
  province: string;
  city: string;
  postCode: string;
};

export type ValidFieldNames =
  | 'identityCardType'
  | 'identityCardNumber'
  | 'nationality'
  | 'name'
  | 'placeOfBirth'
  | 'dateOfBirth'
  | 'address'
  | 'province'
  | 'city'
  | 'postCode';

export type FormFieldProps = {
  type: string;
  label: string;
  placeholder: string;
  name: ValidFieldNames;
  defaultValue?: string;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  disabled?: boolean;
};
