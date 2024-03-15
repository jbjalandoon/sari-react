import { createPortal } from "react-dom";

export default function Alert({ message }: { message: string }) {
  const icon = "Some Icon";

  return createPortal(
    <div className="absolute top-4 right-4 bg-green-600 w-[300px] h-24 flex items-center p-4 rounded-lg shadow-xl">
      <div className="flex-1">{icon}</div>
      <div className="flex-2">{message}</div>
    </div>,
    document.body
  );
}
