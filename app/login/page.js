"use client";

import Link from "next/link";
import Header from "../components/header";

export default function Login() {
  return (
    <div className="flex flex-col font-sans dark:bg-black min-h-screen">
      <Header />
      <div className="flex items-center justify-center bg-black text-white">
        <div className="bg-black p-16 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-5xl font-bold mb-12 mt-5 text-center">Login</h1>

          <form className="flex flex-col space-y-8 text-xl">
            <div>
              <label className="font-medium mb-3 block" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                className="w-full px-5 py-4 rounded border border-zinc-700 bg-black text-white 
                           placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-black"
              />
            </div>

            <div>
              <label className="font-medium mb-3 block" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                className="w-full px-5 py-4 rounded border border-zinc-700 bg-black text-white 
                           placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-black"
              />
            </div>

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
