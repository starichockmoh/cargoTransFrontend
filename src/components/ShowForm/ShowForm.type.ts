import type { AnyObject } from 'antd/lib/_util/type';

export interface ShowFormProps {
  data: AnyObject | null;
  isOpen: boolean;
  handleClose: () => void;
}
