import { Bell, X } from "lucide-react";

const NotificationPopup = ({ notification, onClose }) => {
  if (!notification) return null;

  return (
    <div className="fixed top-5 right-5 z-[9999] w-96 bg-[#111] border border-zinc-800 rounded-xl shadow-2xl p-4">

      <div className="flex items-start gap-3">

        <div className="w-10 h-10 rounded-full bg-[#252525] flex items-center justify-center">
          <Bell size={20} className="text-white" />
        </div>

        <div className="flex-1">
          <p className="text-white font-medium">
            New Notification
          </p>

          <p className="text-sm text-zinc-400 mt-1">
            {notification.message}
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-zinc-500 hover:text-white"
        >
          <X size={18} />
        </button>

      </div>

    </div>
  );
};

export default NotificationPopup;