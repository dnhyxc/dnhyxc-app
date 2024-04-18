import { ElNotification } from 'element-plus';

export const showMessage = ({
  title,
  message,
  type = 'success',
  duration = 2000,
  offset = 65,
  onClose
}: {
  title: string;
  message: string;
  type: 'success' | 'warning' | 'info' | 'error';
  duration?: number;
  offset?: number;
  onClose?: () => void;
}) => {
  ElNotification({
    title,
    message,
    type,
    duration,
    offset,
    onClose
  });
};
