import { Table } from 'antd';
import { PageTableProps } from 'pages/PageTable/PageTable.type';
import { AnyObject } from 'antd/lib/_util/type';

export default function PageTable<T extends AnyObject>({
  columns,
  dataSource,
}: PageTableProps<T>) {
  return <Table dataSource={dataSource} columns={columns} />;
}
