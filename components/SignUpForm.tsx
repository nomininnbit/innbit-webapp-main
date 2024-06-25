"use client"

// components/SignUpForm.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SignUpForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false); // State for the checkbox

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-up logic here, including validation for agreeToTerms
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
          <Link href="/" className="cursor-pointer">
            <Image
              src={'/icons/innbitLogo.svg'} alt="Innbit Logo"
              width={200}
              height={30}
            />
          </Link>
        </div>
        <h2 className="text-xl text-center text-gray-900 mb-4">
          Join Our Flexible IoT Product Tracking Platform
        </h2>
        <form className="space-y-4" onSubmit={handleSignUp}>
          {/* Existing input fields */}
          <div>
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="First Name"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Last Name"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          {/* Checkbox for agreeing to terms */}
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              By checking this box, you are agreeing to our terms of service.
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Register
            </button>
          </div>
          <div className="text-sm text-center">
            Already have an account?{' '}
            <Link href="/sign-in" className="text-blue-600 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;