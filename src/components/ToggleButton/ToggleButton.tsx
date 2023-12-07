import cn from 'classnames';

import type { ToggleButtonProps } from './ToggleButton.type';

import styles from './ToggleButton.module.scss';

export default function ToggleButton({
  className,
  children,
  isActive,
  isDisabled,
  value = '',
  onClick,
}: ToggleButtonProps) {
  return (
    <button
      data-testid={'toggleButton'}
      type="button"
      className={cn(styles.toggle_button, className, {
        [styles['toggle_button-active']]: isActive,
      })}
      disabled={isDisabled}
      onClick={
        (onClick &&
          !isDisabled &&
          (() => {
            onClick(value);
          })) ||
        undefined
      }
    >
      {children}
    </button>
  );
}
