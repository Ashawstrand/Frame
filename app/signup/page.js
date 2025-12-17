"use client";

import Link from "next/link";
import Header from "../components/header";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../utils/firebase";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address.");
    return;
  }

    if (!password) {
      setError("Please enter a password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredentials.user);

      setSuccess(
        "Account created successfully! Please check your email for verification."
      );
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("Firebase Auth Error:", err.code, err.message);
      switch (err.code) {
        case "auth/email-already-in-use":
          setError("This email is already registered.");
          break;
        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;
        case "auth/missing-password":
          setError("Please enter a password.");
          break;
        case "auth/weak-password":
          setError("Password should be at least 6 characters.");
          break;
        default:
          setError("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col font-sans dark:bg-black min-h-screen">
      <Header />
      <div className="flex items-center justify-center bg-black text-white">
        <div className="bg-black p-16 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-5xl font-bold mb-12 mt-5 text-center">
            Create Account
          </h1>

          <form
            className="flex flex-col space-y-8 text-xl"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="font-medium mb-3 block" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-5 py-4 rounded border border-zinc-700 bg-black text-white placeholder:opacity-70 focus:bg-black focus:outline-none focus:ring-2 focus:ring-red-600"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="font-medium mb-3 block" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-5 py-4 rounded border border-zinc-700 bg-black text-white placeholder:opacity-70 focus:bg-black focus:outline-none focus:ring-2 focus:ring-red-600"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="font-medium mb-3 block" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-5 py-4 rounded border border-zinc-700 bg-black text-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-red-600"
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label
                className="font-medium mb-3 block"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="w-full px-5 py-4 rounded border border-zinc-700 bg-black text-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-red-600"
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-red-500 text-center font-medium">{error}</p>
            )}
            {success && (
              <p className="text-zinc-200 text-center font-medium">
                {success}
              </p>
            )}
            <button
              type="submit"
              className="w-full py-3 rounded bg-red-600 hover:bg-red-700 transition-colors font-semibold mt-8 text-lg"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm text-zinc-400">Already have an account?</p>
            <Link href="/login">
              <button className="mt-4 w-full py-3 rounded bg-black border hover:bg-zinc-900 transition-colors font-semibold text-lg">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
