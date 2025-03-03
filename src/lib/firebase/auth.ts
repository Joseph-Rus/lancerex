import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    User,
    UserCredential,
    sendPasswordResetEmail,
  } from "firebase/auth";
  import { auth } from "./config";
  
  // Register a new user with email and password
  export const registerUser = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  // Send email verification to current user
  export const sendVerificationEmail = async (user: User): Promise<void> => {
    return sendEmailVerification(user);
  };
  
  // Sign in existing user with email and password
  export const loginUser = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  // Sign out current user
  export const logoutUser = async (): Promise<void> => {
    return signOut(auth);
  };
  
  // Send password reset email
  export const resetPassword = async (email: string): Promise<void> => {
    return sendPasswordResetEmail(auth, email);
  };
  
  // Get current user
  export const getCurrentUser = (): User | null => {
    return auth.currentUser;
  };