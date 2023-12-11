import { ColumnsType } from 'antd/lib/table';
import { AnyObject } from 'antd/lib/_util/type';
import { PageTypeEnum } from 'shared/types/tables.type';

export interface PageTableProps<T extends AnyObject> {
  columns: ColumnsType<T>;
  pageType: PageTypeEnum;
}
