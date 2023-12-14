import { Button, DatePicker, Form, Input, InputNumber, Modal } from 'antd';
import AsyncSelect from 'components/AsyncSelect';

import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import type { CreateFormProps } from 'components/CreateForm/CreateForm.type';
import type { Store } from 'rc-field-form/lib/interface';

const MyDatePicker = DatePicker.generatePicker<Date>(dateFnsGenerateConfig);

export default function CreateForm<T>({
  fields,
  isOpen,
  handleClose,
  submit,
  initialData,
  type,
}: CreateFormProps<T>) {
  if (initialData)
    return (
      <Modal
        title={type === 'create' ? 'Создание' : 'Редактирование'}
        open={isOpen}
        footer={null}
        onCancel={handleClose}
        forceRender
      >
        <Form
          labelWrap
          colon={false}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          name={'tableForm'}
          onFinish={submit}
          scrollToFirstError
          initialValues={initialData as Store}
        >
          {fields.map((field) => {
            if (field.key !== 'id') {
              if (field.field === 'number') {
                return (
                  <Form.Item
                    key={field.key as string}
                    label={field.title as string}
                    name={field.key as string}
                    rules={[{ required: true }]}
                  >
                    <InputNumber />
                  </Form.Item>
                );
              }
              if (field.field === 'date') {
                return (
                  <Form.Item
                    key={field.key as string}
                    label={field.title as string}
                    name={field.key as string}
                    rules={[{ required: true }]}
                  >
                    <MyDatePicker placeholder={''} />
                  </Form.Item>
                );
              }
              if (field.field === 'asyncSelect') {
                return (
                  <Form.Item
                    key={field.key as string}
                    name={field.key as string}
                    label={field.title as string}
                  >
                    <AsyncSelect allowClear fetchOptions={field.fetchOptions} />
                  </Form.Item>
                );
              }
              return (
                <Form.Item
                  label={field.title as string}
                  name={field.key as string}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              );
            }

            return <></>;
          })}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {type === 'create' ? 'Создать' : 'Редактировать'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  return null;
}
