'use client';

import Toast from './Toast';

type ToastItem = {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
};

type ToastContainerProps = {
  toasts: ToastItem[];
  onRemove: (id: number) => void;
};

const ToastContainer = ({ toasts, onRemove }: ToastContainerProps) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => onRemove(toast.id)}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
