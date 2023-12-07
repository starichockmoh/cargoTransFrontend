import { Children, isValidElement, cloneElement, ReactElement } from 'react';
import cn from 'classnames';
import type { ToggleButtonGroupProps } from './ToggleButtonGroup.type';
import styles from './ToggleButtonGroup.module.scss';

export default function ToggleButtonGroup({
  children,
  className,
  onChange,
  value,
}: ToggleButtonGroupProps) {
  return (
    <div className={cn(styles.root, className)}>
      {Children.map(children, (child, currentChildIndex) => {
        if (!isValidElement(child)) {
          return null;
        }
        const element = child as ReactElement;
        return (
          <>
            {cloneElement(element, {
              onClick: onChange,
              isActive: value === element.props.value,
              isDisabled: element.props.isDisabled,
            })}
          </>
        );
      })}
    </div>
  );
}
