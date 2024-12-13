"use client";  // Client-side rendering ke liye

import { SessionProvider } from "next-auth/react";

export const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
          {children}
        </div>
      </div>
    </SessionProvider>
  );
};
