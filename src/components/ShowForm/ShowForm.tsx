import { Form, Input, Modal } from 'antd';
import type { ShowFormProps } from 'components/ShowForm/ShowForm.type';

export default function ShowForm({ data, isOpen, handleClose }: ShowFormProps) {
  if (data)
    return (
      <Modal
        title={'Детальная информация'}
        open={isOpen}
        footer={null}
        onCancel={handleClose}
        forceRender
      >
        <Form
          labelWrap
          colon={false}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name={'tableFormShow'}
          disabled
          scrollToFirstError
          initialValues={data}
        >
          {Object.entries(data).map(([key, value]) => {
            return (
              <Form.Item label={key as string} name={key}>
                <Input />
              </Form.Item>
            );
          })}
        </Form>
      </Modal>
    );
  return null;
}
