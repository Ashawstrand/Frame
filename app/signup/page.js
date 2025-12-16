import Link from "next/link";
import Header from "../components/header";

export default function SignUp() {
  return (
    <div className="flex flex-col font-sans dark:bg-black">
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-black p-16 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-5xl font-bold mb-12 text-center">
            Create Account
          </h1>

          <form className="flex flex-col space-y-8 text-xl">
            <div>
              <label className="font-medium mb-3 block" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-5 py-4 rounded border border-zinc-700 bg-black text-white 
                           placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="font-medium mb-3 block" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded border border-zinc-700 bg-black text-white 
                           placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-red-600"
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
                           placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="font-medium mb-3 block" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="w-full px-5 py-4 rounded border border-zinc-700 bg-black text-white 
                           placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

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
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
