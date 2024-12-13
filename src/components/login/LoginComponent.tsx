"use client";

import { signIn } from "next-auth/react";

export default function SigInComponent() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Sign In
                </h1>
                <button
                    onClick={() => signIn("github")}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Sign In with GitHub
                </button>
            </div>
        </div>
    );
}
