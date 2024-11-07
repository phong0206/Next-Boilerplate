import { Spin } from 'antd';
import LoadingIcon from 'icons/LoadingIcon';

interface ILoadingProps {
  isLoading: boolean;
}

export const LoadingOverlays: React.FC<ILoadingProps> = ({ isLoading }) => {
  return (
    <Spin
      spinning={isLoading}
      fullscreen
      size="large"
      className="z-[99999]"
      indicator={
        <div>
          <LoadingIcon className="animate-spin" />
        </div>
      }
    />
  );
};
