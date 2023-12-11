export interface CreateFormProps {
  fields: Array<string>;
  isOpen: boolean;
  handleClose: () => void;
  submit: (data: any) => void;
}
