export interface AlertProps {
  isOpen: boolean;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  msg?: string;
  msgs?: string[];
  type?: number;
  confirmText?: string;
  cancleText?: string;
  onClose?: () => void;
  onAfterClose?: () => void;
  onAfterConfirm?: () => void;
  onAfterCancle?: () => void;
}

function Alert() {
  return <div>alert</div>;
}

export default Alert;
