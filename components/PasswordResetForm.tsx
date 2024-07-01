"use client";

// components/SignInForm.tsx
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
          <Link href="/" className="cursor-pointer">
            <Image
              src={"/icons/innbitLogo.svg"}
              alt="Innbit Logo"
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
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="relative block w-full px-3 py-2 border border-gray-200 placeholder-gray-500 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Reset Password
            </button>
          </div>

          <div className="text-sm text-center pt-4">
            Already have an account?{" "}
            <a href="/sign-in" className="text-blue-600 hover:underline ml-1">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
