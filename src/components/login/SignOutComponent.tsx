"use client";

import { signOut } from "next-auth/react";

export default function SigOutComponent() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Sign Out</h1>
                <button
                    onClick={() => signOut()}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                >
                    Sign Out of GitHub
                </button>
            </div>
        </div>
    );
}
