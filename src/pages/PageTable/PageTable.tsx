import { useCallback, useEffect, useState } from 'react';
import { Api } from 'services/api';
import { Button, DatePicker, Modal, Table } from 'antd';

import Search from 'antd/es/input/Search';
import CreateForm from 'components/CreateForm';
import ShowForm from 'components/ShowForm';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';

import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import { deNormalize } from 'shared/utils/normalizingFields';

import type { PageTableProps } from 'pages/PageTable/PageTable.type';
import type { AnyObject } from 'antd/lib/_util/type';

import styles from './PageTable.module.scss';

const MyDatePicker = DatePicker.generatePicker<Date>(dateFnsGenerateConfig);

export default function PageTable<T extends AnyObject>({
  columns,
  pageType,
  isSuperUser,
}: PageTableProps<T>) {
  const [tableData, setTableData] = useState<Array<T>>([]);
  const [entityData, setEntityData] = useState<AnyObject | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenShow, setIsOpenShow] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<number | null>(null);
  const [costDate, setCostDate] = useState<Date | null>(null);
  const [cost, setCost] = useState<number | null>(null);

  useEffect(() => {
    Api.auth().then((userId) => {
      setCurrentUser(userId);
    });
  }, []);

  const getData = useCallback(
    (search?: string) => {
      Api.getMany(pageType, isSuperUser, currentUser, search).then((data) => {
        setTableData(data);
      });
    },
    [currentUser, isSuperUser, pageType],
  );

  useEffect(() => {
    if (pageType) getData();
  }, [getData, pageType]);

  const getDetails = (id: number) => {
    Api.getOne(pageType, id).then((data) => {
      setEntityData(data);
      setIsOpenShow(true);
    });
  };

  const deleteEntity = (id: number) => {
    Api.delete(pageType, id).then(() => {
      getData();
    });
  };

  const create = (data: T) => {
    Api.create(pageType, data).then(() => {
      getData();
    });
  };

  const update = (data: T) => {
    if (entityData)
      Api.update(pageType, data, entityData.id).then(() => {
        getData();
      });
  };
  const getCost = () => {
    if (costDate)
      Api.getCost(costDate.toISOString()).then((res) => {
        setCost(res.data);
      });
  };

  return (
    <div>
      <div className={styles.buttons_block}>
        <Button
          onClick={() => {
            setIsOpen(true);
            setEntityData({});
          }}
          disabled={!isSuperUser && pageType === 'requests'}
        >
          Создать
        </Button>
        <Search
          allowClear
          placeholder="Поиск"
          onSearch={(value) => getData(value)}
          style={{ width: 200 }}
        />
        {pageType === 'requests' && isSuperUser && (
          <>
            <Button disabled={!costDate} onClick={getCost}>
              Рассчитать выручку за период:
            </Button>
            <MyDatePicker
              placeholder={''}
              value={costDate}
              onChange={(value) => setCostDate(value)}
            />
          </>
        )}
      </div>

      <Table
        dataSource={tableData}
        columns={[
          ...columns,
          {
            title: 'Действия',
            key: 'action',
            align: 'center',
            render: (_, record) => {
              return (
                <>
                  <Button type="link" onClick={() => getDetails(record.id)}>
                    <EyeOutlined />
                  </Button>
                  {!(pageType === 'requests' && !isSuperUser) && (
                    <Button type="link" onClick={() => deleteEntity(record.id)}>
                      <DeleteOutlined />
                    </Button>
                  )}
                </>
              );
            },
          },
        ]}
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: () => {
              setEntityData(deNormalize(record));
              setIsOpen(true);
            },
          };
        }}
      />
      <CreateForm
        submit={
          entityData && Object.entries(entityData).length ? update : create
        }
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
          setEntityData(null);
        }}
        fields={columns}
        initialData={entityData}
        type={
          entityData && Object.entries(entityData).length ? 'update' : 'create'
        }
      />
      <ShowForm
        isOpen={isOpenShow}
        handleClose={() => {
          setIsOpenShow(false);
          setEntityData(null);
        }}
        data={entityData}
      />
      <Modal
        title={`Прибыль за ${costDate?.toLocaleDateString()}`}
        open={cost !== null}
        footer={null}
        onCancel={() => setCost(null)}
        forceRender
      >
        <h3>
          <span className={styles.cost_value}>{cost}</span> рублей
        </h3>
      </Modal>
    </div>
  );
}
