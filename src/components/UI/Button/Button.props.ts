import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type ButtonType = JSX.IntrinsicElements['button']['type'];

export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  typeBtn: ButtonType;
  disabled?: boolean;
  handleClick?: () => void;
}
