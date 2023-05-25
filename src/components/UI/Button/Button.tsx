import { ButtonProps } from './Button.props';

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  typeBtn = 'button',
}) => (
  <button
    disabled={disabled}
    // eslint-disable-next-line react/button-has-type
    type={typeBtn}
    className="btn btn-lg btn-primary pull-xs-right"
  >
    {children}
  </button>
);
