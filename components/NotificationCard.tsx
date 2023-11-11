"use client";
import React from "react";

import { Notification } from "@/types/Notification";

function NotificationCard({
  notifications,
}: {
  notifications: Notification[];
}) {
  return (
    <>
      {notifications.map((notification,index) => (
        <div key = {index} className="w-90% m-3 p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover-bg-gray-700">
          <p className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
            {notification.announced_by}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {notification.announcement_message}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-300 text-right mt-2">
            {notification.date_of_announcement.toLocaleDateString("en-US", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      ))}
    </>
  );
}

export default NotificationCard;
