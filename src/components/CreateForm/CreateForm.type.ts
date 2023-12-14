import type { ColumnType } from 'antd/es/table';

export interface CreateFormProps<T> {
  fields: Array<ColumnType<T> & { field?: string; fetchOptions?: any }>;
  isOpen: boolean;
  handleClose: () => void;
  submit: (data: any) => void;
  initialData: T | null;
  type: 'create' | 'update';
}
