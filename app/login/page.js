"use client";

import Link from "next/link";
import Header from "../components/header";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, auth } from "../utils/firebase";

export default function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");


  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in:", userCredentials.user);
  }

  catch (err) {
    switch (err.code) {
      case "auth/user-not-found":
        setError("No account found with this email.");
        break;
      case "auth/wrong-password":
        setError("Incorrect password. Try again.");
        break;
      case "auth/invalid-email":
        setError("Please enter a valid email address.")
        break;
      default:
        setError("Login failed. Please try again.");
    }
  }
  };


  return (
    <div className="flex flex-col font-sans dark:bg-black min-h-screen">
      <Header />
      <div className="flex items-center justify-center bg-black text-white">
        <div className="bg-black p-16 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-5xl font-bold mb-12 mt-5 text-center">Login</h1>

          <form className="flex flex-col space-y-8 text-xl" onSubmit={handleSubmit}>
            <div>
              <label className="font-medium mb-3 block" htmlFor="email">
                Email
              </label>
              <input
              className="w-full px-5 py-4 rounded border border-zinc-700 bg-black text-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-black"
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="font-medium mb-3 block" htmlFor="password">
                Password
              </label>
              <input
              className="w-full px-5 py-4 rounded border border-zinc-700 bg-black text-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-black"
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>


            {error && (
              <p className="text-red-500 text-center font-medium">{error}</p>
            )}

            <div className="flex justify-center">
              <button
                className=" w-full py-3 rounded bg-red-600 hover:bg-red-700 transition-colors font-semibold text-xl mt-10"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="mt-10 text-center">
            <p className="text-m text-zinc-400">Don&apos;t have an account?</p>
            <Link href="/signup"
            className=" items-center justify-center">
              <button className="mt-4 w-full py-3 rounded bg-black border hover:bg-zinc-900 transition-colors font-semibold text-xl">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
