"use client";
import React from "react";
import { useRouter } from "next/router";

const logout = () => {
  const router = useRouter();

  // Perform logout logic here
  // Example: Clearing the authentication token from local storage
  localStorage.removeItem("authToken");

  console.log("Successfully logged out");
  // Redirect to sign-in page after logout
  router.push("/sign-in");

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="px-4 py-3 text-white bg-green-500 rounded-lg">
        Successfully logged out. Redirecting to sign-in page...
      </div>
    </div>
  );
};

export default logout;
