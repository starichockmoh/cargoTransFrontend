import { AnyObject } from 'antd/lib/_util/type';
import { PageTypeEnum } from 'shared/types/tables.type';
import { ColumnType } from 'antd/es/table';

export interface PageTableProps<T extends AnyObject> {
  columns: Array<ColumnType<T> & { field?: string; fetchOptions?: any }>;
  pageType: PageTypeEnum;
  isSuperUser: boolean;
}
