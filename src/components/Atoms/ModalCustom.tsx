import { Input, Modal } from 'antd';

interface IModal {
  title: string;
  onOk: () => void;
  open: boolean;
  onCancel: () => void;
  warning?: string;
  isInput?: boolean;
  inputValue?: string;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ModalCustom: React.FC<IModal> = ({
  title,
  onOk,
  open,
  onCancel,
  warning,
  isInput = false,
  inputValue,
  handleInputChange,
}) => {
  return (
    <Modal title={title} open={open} onOk={onOk} onCancel={onCancel} centered>
      {isInput && (
        <Input
          placeholder="Nhập thông tin"
          value={inputValue}
          onChange={handleInputChange}
          style={{ marginTop: '10px' }}
        />
      )}
      <p>{warning}</p>
    </Modal>
  );
};
