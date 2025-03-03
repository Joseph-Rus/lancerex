'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function VerifyEmail() {
  const router = useRouter();
  const [isResending, setIsResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  const handleResendEmail = async () => {
    setIsResending(true);
    
    // Simulate API call
    try {
      // In a real app, you'd call Firebase Auth to resend verification email
      await new Promise(resolve => setTimeout(resolve, 1500));
      setResendSuccess(true);
    } catch (error) {
      console.error('Error resending verification:', error);
    } finally {
      setIsResending(false);
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
            We've sent a verification email to your address. Please check your inbox and click the link to verify your account.
          </p>
          
          {resendSuccess && (
            <div className="mb-6 p-3 bg-green-50 text-green-700 rounded-lg">
              Verification email resent successfully!
            </div>
          )}
          
          <button
            onClick={handleResendEmail}
            disabled={isResending}
            className="w-full bg-[#FFD700] text-[#003366] font-medium py-2 rounded-lg hover:bg-[#E6C200] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isResending ? 'Sending...' : 'Resend Verification Email'}
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