import { useState, useEffect } from "react";
import { Bell, Check, X } from "lucide-react";
import axios from "axios";

import socket from "../../services/socket";

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // ==========================================
  // GET EXISTING NOTIFICATIONS
  // ==========================================

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/notifications/get",
          {
            withCredentials: true,
          }
        );

        setNotifications(response.data.notifications);
      } catch (error) {
        console.log("Error fetching notifications:", error);
      }
    };

    getNotifications();
  }, []);

  // ==========================================
  // SOCKET.IO - REAL TIME NOTIFICATIONS
  // ==========================================

 useEffect(() => {
  console.log("👂 Notification listener registered");

  const handleNotification = (data) => {
    console.log("🔥 RECEIVED:", data);

    setNotifications((prev) => {
      const newNotification = data.notification;

      // Prevent duplicate notification
      const alreadyExists = prev.some(
        (notification) => notification._id === newNotification._id
      );

      if (alreadyExists) {
        return prev;
      }

      return [newNotification, ...prev];
    });
  };

  socket.on("notification", handleNotification);

  return () => {
    console.log("🧹 Notification listener removed");
    socket.off("notification", handleNotification);
  };
}, []);

  // ==========================================
  // UNREAD COUNT
  // ==========================================

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  return (
    <div className="relative">

      {/* ==========================================
          NOTIFICATION BUTTON
      ========================================== */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 px-6 py-4 rounded-xl text-xl transition-all duration-200 text-[#b8b8b8] hover:bg-[#252525] hover:text-white"
      >
        <Bell size={25} strokeWidth={1.8} />

        <span>Notifications</span>

        {unreadCount > 0 && (
          <span className="ml-auto flex items-center justify-center min-w-7 h-7 px-2 rounded-full bg-[#d54444] text-white text-sm font-semibold">
            {unreadCount}
          </span>
        )}
      </button>

      {/* ==========================================
          DROPDOWN
      ========================================== */}

      {isOpen && (
        <div className="absolute left-[calc(100%+12px)] top-0 z-50 w-96 bg-[rgba(11,11,11,1)] border-2 border-zinc-800 rounded-xl shadow-2xl overflow-hidden">

          {/* ==========================================
              HEADER
          ========================================== */}

          <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">

            <div>
              <h2 className="text-lg font-semibold text-white">
                Notifications
              </h2>

              <p className="text-sm text-[#888] mt-1">
                {unreadCount} unread
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-[#888] hover:bg-[#252525] hover:text-white transition"
            >
              <X size={20} />
            </button>

          </div>

          {/* ==========================================
              NOTIFICATIONS LIST
          ========================================== */}

          <div className="max-h-96 overflow-y-auto">

            {notifications.length === 0 ? (

              <div className="px-5 py-8 text-center text-[#777]">
                No notifications
              </div>

            ) : (

              notifications.map((notification) => (

                <div
                  key={notification._id}
                  className={`px-5 py-4 border-b border-zinc-800 transition hover:bg-[#1b1b1b] ${
                    notification.unread
                      ? "bg-[#151515]"
                      : ""
                  }`}
                >

                  <div className="flex gap-3">

                    {/* Unread dot */}

                    <div className="pt-2">

                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          notification.unread
                            ? "bg-[#d54444]"
                            : "bg-zinc-700"
                        }`}
                      />

                    </div>

                    {/* Notification content */}

                    <div className="flex-1">

                      <p className="text-[15px] text-white leading-6">
                        {notification.message}
                      </p>

                      <p className="text-sm text-[#777] mt-1">
                        {notification.time || "Just now"}
                      </p>

                    </div>

                    {/* Mark as read */}

                    {notification.unread && (

                      <button
                        className="self-center p-2 rounded-lg text-[#777] hover:bg-[#252525] hover:text-white transition"
                        title="Mark as read"
                      >
                        <Check size={17} />
                      </button>

                    )}

                  </div>

                </div>

              ))

            )}

          </div>

          {/* ==========================================
              FOOTER
          ========================================== */}

          <div className="p-3">

            <button
              className="w-full py-3 rounded-lg text-sm text-[#b8b8b8] hover:bg-[#252525] hover:text-white transition"
            >
              Mark all as read
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default NotificationDropdown;