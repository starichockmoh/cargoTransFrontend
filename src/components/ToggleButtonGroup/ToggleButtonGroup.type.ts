import type { ReactNode } from 'react';

export interface ToggleButtonGroupProps {
  onChange: (value: never) => void;
  className?: string;
  value?: string | number;
  divider?: ReactNode;
  isWithoutDivider?: boolean;
  isMultiple?: boolean;
  children?: ReactNode;
}
