import type { ReactNode } from 'react';

export type ToggleButtonProps = {
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  value?: string | number;
  onClick?: (value?: string | number) => void;
  children?: ReactNode;
};
