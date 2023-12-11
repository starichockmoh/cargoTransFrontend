import { Button, Table } from 'antd';
import { PageTableProps } from 'pages/PageTable/PageTable.type';
import { AnyObject } from 'antd/lib/_util/type';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import CreateForm from 'components/CreateForm';

export default function PageTable<T extends AnyObject>({
  columns,
  pageType,
}: PageTableProps<T>) {
  const [tableData, setTableData] = useState<Array<T>>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getData = useCallback(() => {
    axios.get(`http://localhost:3000/${pageType}`).then((res) => {
      setTableData(res.data);
    });
  }, [pageType]);

  useEffect(() => {
    if (pageType) getData();
  }, [getData, pageType]);

  const submit = (data: T) => {
    axios.post(`http://localhost:3000/${pageType}`, data).then(() => {
      getData();
    });
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Создать</Button>
      <Table dataSource={tableData} columns={columns} />
      <CreateForm
        submit={submit}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        fields={columns.map((c) => c.key as string)}
      />
    </div>
  );
}
