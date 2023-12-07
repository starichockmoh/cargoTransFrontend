import { ColumnsType } from 'antd/lib/table';
import { AnyObject } from 'antd/lib/_util/type';

export interface PageTableProps<T extends AnyObject> {
  dataSource: Array<T>;
  columns: ColumnsType<T>;
}
