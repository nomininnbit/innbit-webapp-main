"use client"

import React, { useState } from 'react';

interface Profile {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  country: string;
  profilePicture: File | null;
  language: string;
}

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, disabled }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-innbitRed focus:border-innbitRed sm:text-sm"
      />
    </div>
  );
};

const UserProfile = () => {
  const [profile, setProfile] = useState<Profile>({
    firstName: 'Erika',
    lastName: 'Musterfrau',
    userName: 'erika.musterfrau',
    email: 'erika.musterfrau@test.com',
    password: '********',
    phoneNumber: '+43 664 1234567',
    address: 'Musterstraße 123, 6020 Innsbruck',
    country: 'Austria',
    profilePicture: null,
    language: 'English',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    country: '',
    profilePicture: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const fields = [
    { label: 'First Name', name: 'firstName' },
    { label: 'Last Name', name: 'lastName' },
    { label: 'User Name', name: 'userName' },
    { label: 'Email', name: 'email' },
    { label: 'Password', name: 'password' },
    { label: 'Phone Number', name: 'phoneNumber' },
    { label: 'Address', name: 'address' },
    { label: 'Country', name: 'country' },
    { label: 'Profile Picture', name: 'profilePicture' },
    { label: 'Language', name: 'language' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value as string,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfile({
        ...profile,
        profilePicture: e.target.files[0],
      });
    }
  };

  const validate = (): boolean => {
    // Add validation logic here
    // Return true if form is valid, false otherwise
    return true; // Replace this with your actual validation logic
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission logic here
      console.log(profile);
    }
  };

  return (
    <div className="w-full mx-auto p-4 bg-white border border-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((field) => (
          <InputField
            key={field.name}
            label={field.label}
            name={field.name}
            onChange={handleChange}
            disabled={!isEditing} value={''}          />
        ))}

        <div className="mt-6 col-span-1 md:col-span-2">
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="w-40 px-4 py-2 bg-innbitRed text-white font-semibold rounded-md hover:bg-innbitRed-700 focus:outline-none focus:ring-2 focus:ring-innbitRed"
          >
            {isEditing ? 'Save Profile' : 'Edit Profile'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;