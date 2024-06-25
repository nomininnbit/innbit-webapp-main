"use client"

// components/SignInForm.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
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
          Flexible IoT Product Tracking Platform
        </h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="rounded-lg shadow-sm">
            <div>
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
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Login
            </button>
          </div>
          <div className="text-sm text-center mb-2">
            <a href="#" className="text-center text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>
          <div className="text-sm text-center">
            Need an account?{' '}
            <a href="/sign-up" className="text-blue-600 hover:underline ml-1">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
