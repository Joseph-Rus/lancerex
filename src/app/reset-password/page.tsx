"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { resetPassword } from "@/lib/firebase/auth";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      await resetPassword(email);
      setMessage("Password reset email sent. Check your inbox.");
      setLoading(false);
    } catch (error: any) {
      console.error(error);
      setError(error.message || "Failed to send reset email");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-[#003366] text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/api/placeholder/40/40" 
                alt="Lancer Exchange Logo" 
                width={40} 
                height={40}
                className="h-10 w-10"
                priority
              />
              <h1 className="text-2xl font-bold">Lancer Exchange</h1>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-6 text-center">Reset Your Password</h2>
          
          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          {message && (
            <div className="mb-6 p-3 bg-green-50 text-green-700 rounded-lg text-sm">
              {message}
            </div>
          )}
          
          <form onSubmit={handleResetPassword} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#003366] focus:border-[#003366] sm:text-sm"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#003366] hover:bg-[#002244] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003366] disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Reset Email"}
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <Link 
              href="/login" 
              className="text-[#003366] font-medium hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-6 bg-gray-100">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Lancer Exchange. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}