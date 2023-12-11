import { CreateFormProps } from 'components/CreateForm/CreateForm.type';
import { Input, Modal, Form, Button } from 'antd';

export default function CreateForm({
  fields,
  isOpen,
  handleClose,
  submit,
}: CreateFormProps) {
  return (
    <Modal
      title={'Создание'}
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
      >
        {fields.map((field) => {
          if (field !== 'id')
            return (
              <Form.Item
                label={field}
                name={field}
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            );
          return <></>;
        })}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
