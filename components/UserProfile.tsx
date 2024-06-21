"use client"

import React, { useState } from 'react';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    country: '',
    profilePicture: null as File | null,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
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

  const validate = () => {
    let valid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      phoneNumber: '',
      address: '',
      country: '',
      profilePicture: '',
    };

    if (!profile.firstName) {
      newErrors.firstName = 'First Name is required';
      valid = false;
    }

    if (!profile.lastName) {
      newErrors.lastName = 'Last Name is required';
      valid = false;
    }

    if (!profile.userName) {
      newErrors.userName = 'User Name is required';
      valid = false;
    }

    if (!profile.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(profile.email)) {
      newErrors.email = 'Email address is invalid';
      valid = false;
    }

    if (!profile.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (profile.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    if (!profile.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
      valid = false;
    }

    if (!profile.address) {
      newErrors.address = 'Address is required';
      valid = false;
    }

    if (!profile.country) {
      newErrors.country = 'Country is required';
      valid = false;
    }

    if (!profile.profilePicture) {
      newErrors.profilePicture = 'Profile Picture is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
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
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-innbitRed focus:border-innbitRed sm:text-sm"
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-innbitRed focus:border-innbitRed sm:text-sm"
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">User Name</label>
          <input
            type="text"
            name="userName"
            value={profile.userName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-innbitRed focus:border-innbitRed sm:text-sm"
          />
          {errors.userName && <p className="text-red-500 text-xs mt-1">{errors.userName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-innbitRed focus:border-innbitRed sm:text-sm"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-innbitRed focus:border-innbitRed sm:text-sm"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={profile.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-innbitRed focus:border-innbitRed sm:text-sm"
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-innbitRed focus:border-innbitRed sm:text-sm"
          />
          {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            value={profile.country}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-innbitRed focus:border-innbitRed sm:text-sm"
          />
          {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
        </div>
        <div className="mb-4 ">
          <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-innbitRed-50 file:text-innbitRed-700 hover:file:bg-innbitRed-100"
          />
          {errors.profilePicture && <p className="text-red-500 text-xs mt-1">{errors.profilePicture}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Language</label>
          <select
            name="language"
            value={profile.language}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-innbitRed focus:border-innbitRed sm:text-sm"
          >
            <option value="English">English</option>
            <option value="German">German</option>
          </select>
        </div>
        <div className="mt-6 col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-40 px-4 py-2 bg-innbitRed text-white font-semibold rounded-md hover:bg-innbitRed-700 focus:outline-none focus:ring-2 focus:ring-innbitRed"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;