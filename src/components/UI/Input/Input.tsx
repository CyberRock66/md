import { useController, UseControllerProps } from 'react-hook-form';
// eslint-disable-next-line import/no-unresolved
import { FieldValues } from 'react-hook-form/dist/types';
import { InputProps } from './Input.props';

export const Input = <T extends FieldValues = FieldValues>(
  props: UseControllerProps<T> & InputProps,
  { disabled }: InputProps,
) => {
  const { field } = useController(props);

  return (
    <fieldset className="form-group">
      <input
        {...field}
        {...props}
        disabled={disabled}
        className="form-control form-control-lg"
      />
    </fieldset>
  );
};
