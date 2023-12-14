import type { SelectProps } from 'antd';
import type { IOption } from 'shared/types/types';

export interface IApiEntity {
  id: number;
  name?: string;
  last_name?: string;
  car_number?: string;
  group_name?: string;
}
export interface AsyncSelectProps
  extends Omit<SelectProps<IOption | IOption[]>, 'options' | 'children'> {
  fetchOptions: () => Promise<{ data: Array<IApiEntity> }>;
  debounceTimeout?: number;
}
