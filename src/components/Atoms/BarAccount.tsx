import { DeleteOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { ModalCustom } from './ModalCustom';

interface IUserProps {
  id: number;
  name: string | undefined;
  email: string | undefined;
  deleteUser: (id: number) => void;
}

const BarAccount: React.FC<IUserProps> = ({ id, name, email, deleteUser }) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  return (
    <div className="flex h-[62px] flex-row items-center justify-between border border-x-2 bg-white py-1 pl-5">
      <div className="flex flex-col">
        <div className="text-xl font-bold">{name}</div>
        <div className="text-base">{email}</div>
      </div>
      <div className="pr-8">
        <button onClick={() => setOpenPopup(true)}>{id && <DeleteOutlined className="text-3xl" />}</button>
      </div>
      <ModalCustom
        title="Bạn có chắc chắn muốn xóa account này?"
        open={openPopup}
        onOk={() => {
          if (id) {
            deleteUser(id);
            setOpenPopup(false);
          } else {
            console.error('ID người dùng không hợp lệ.');
          }
        }}
        onCancel={() => setOpenPopup(false)}
      />
    </div>
  );
};

export default BarAccount;
