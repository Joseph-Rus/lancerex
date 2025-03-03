"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/Authcontext";
import { sendVerificationEmail, logoutUser } from "@/lib/firebase/auth";

export default function VerifyEmail() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isResending, setIsResending] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  
  // If user is already verified, redirect to dashboard
  useEffect(() => {
    if (!loading && user?.emailVerified) {
      router.push("/dashboard");
    }

    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleResendEmail = async () => {
    setIsResending(true);
    setMessage("");
    setError("");
    
    try {
      if (user) {
        await sendVerificationEmail(user);
        setMessage("Verification email resent successfully!");
      } else {
        setError("You must be logged in to request a verification email.");
      }
    } catch (error: any) {
      console.error('Error resending verification:', error);
      setError(error.message || "Failed to resend verification email");
    } finally {
      setIsResending(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      router.push("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

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
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 text-center">
          <div className="mx-auto w-20 h-20 flex items-center justify-center bg-[#E6F7FF] rounded-full mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              className="w-10 h-10 text-[#003366]"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-[#003366] mb-4">Verify Your Email</h2>
          
          <p className="text-gray-600 mb-6">
            We've sent a verification email to <strong>{user?.email}</strong>. 
            Please check your inbox and click the link to verify your account.
          </p>
          
          {message && (
            <div className="mb-6 p-3 bg-green-50 text-green-700 rounded-lg">
              {message}
            </div>
          )}
          
          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          <button
            onClick={handleResendEmail}
            disabled={isResending}
            className="w-full bg-[#FFD700] text-[#003366] font-medium py-2 rounded-lg hover:bg-[#E6C200] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isResending ? 'Sending...' : 'Resend Verification Email'}
          </button>
          
          <button
            onClick={handleLogout}
            className="w-full bg-white border border-gray-300 text-gray-700 font-medium py-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 mt-2"
          >
            Logout
          </button>
          
          <div className="mt-6">
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