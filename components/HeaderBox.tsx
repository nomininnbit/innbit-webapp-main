"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const HeaderBox = () => {
  const [language, setLanguage] = useState('English');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (lang: string) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
    <nav className="flex items-center justify-between mt-[-20px]">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold">
          Dashboard
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            aria-label="Language"
            className="p-2 rounded-full border border-gray-300 flex items-center"
            onClick={toggleDropdown}
          >
            <Image src="/icons/language.svg" alt="Language" width={24} height={24} />
            <span className="ml-2">{language}</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => selectLanguage('English')}
              >
                English
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => selectLanguage('Deutsch')}
              >
                Deutsch
              </button>
            </div>
          )}
        </div>
        <button
          aria-label="Dark Mode"
          className={`p-2 rounded-full border ${isDarkMode ? 'bg-gray-800' : 'border-gray-300'}`}
          onClick={toggleDarkMode}
        >
          <Image
            src={isDarkMode ? "/icons/lightmode.svg" : "/icons/darkmode.svg"}
            alt="Dark Mode"
            width={24}
            height={24}
            className={isDarkMode ? 'filter invert' : ''}
          />
        </button>
        <div className="relative">
          <button
            aria-label="Notifications"
            className="p-2 rounded-full border border-gray-300"
            onClick={toggleNotifications}
          >
            <Image src="/icons/notification.svg" alt="Notifications" width={24} height={24} />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
          </button>
          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg">
              <div className="p-4 text-gray-700">Notifications:</div>
              <ul>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">Notification 1</li>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">Notification 2</li>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">Notification 3</li>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">Notification 4</li>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">Notification 5</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderBox;