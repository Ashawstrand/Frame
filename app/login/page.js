import Link from "next/link";
import Header from "../components/header";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col font-sans dark:bg-black">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-black text-white">
        <div className="bg-black p-12 rounded-lg shadow-lg w-full max-w-2xl">
          

          <form className="flex flex-col space-y-6 text-lg">
            <div>
              <label className="font-medium mb-2 block" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-3 rounded border border-zinc-700 bg-black text-white 
                           placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="font-medium mb-2 block" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded border border-zinc-700 bg-black text-white 
                           placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <button
              className="w-full py-3 rounded bg-red-600 hover:bg-red-700 transition-colors font-semibold mt-8 text-lg"
              type="submit"
            >
              Login
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-400">Don&apos;t have an account?</p>
            <Link href="/signup">
              <button className="mt-3 w-full py-3 rounded bg-black border hover:bg-zinc-900 transition-colors font-semibold text-lg">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
