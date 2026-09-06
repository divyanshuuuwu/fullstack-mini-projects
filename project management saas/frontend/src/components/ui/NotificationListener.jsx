import { useEffect, useState } from "react";
import socket from "../../Services/socket";
import NotificationPopup from "./NotificationPopUp";

const NotificationListener = () => {

  const [popupNotification, setPopupNotification] = useState(null);

  useEffect(() => {

    const handleNotification = (data) => {

      console.log("🔥 NEW NOTIFICATION:", data);

      setPopupNotification(data.notification);

      setTimeout(() => {
        setPopupNotification(null);
      }, 10000);
    };

    socket.on("notification", handleNotification);

    return () => {
      socket.off("notification", handleNotification);
    };

  }, []);

  return (
    <NotificationPopup
      notification={popupNotification}
      onClose={() => setPopupNotification(null)}
    />
  );
};

export default NotificationListener;