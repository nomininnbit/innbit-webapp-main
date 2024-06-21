"use client"

import React, { useState } from 'react';


const PageSettings = () => {
const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleDarkModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
  };

  const handleNotificationsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotifications(event.target.checked);
  };

  return (
    <div className="settings">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeChange}
            className="mr-2"
          />
          Dark Mode
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={notifications}
            onChange={handleNotificationsChange}
            className="mr-2"
          />
          App Notifications
        </label>
      </div>
    </div>
  );
};

export default PageSettings