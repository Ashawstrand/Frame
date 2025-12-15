export default function Login() {
  
  
  
  
  
  
  
  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <form className="flex flex-col space-y-4">
          <label className="font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 rounded border border-zinc-700 bg-black text-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-red-600 rounded "
            placeholder="Enter email"
          ></input>

          <label>Password</label>
          <input
            className="w-full px-3 py-2 rounded border border-zinc-700 bg-black text-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-red-600 rounded "
            placeholder="Enter password"
          ></input>
            <button
          className="w-full py-2 rounded bg-red-600 hover:bg-red-700 transition-colors font-semibold mt-5"
          type="submit"
        >
          Login
        </button>
        </form>

      

         <div className="mt-6 text-center">
          <p className="text-sm text-zinc-400">Don't have an account?</p>
          <button
className="mt-2 w-full py-2 rounded bg-black border border-red hover:bg-zinc-900 transition-colors font-semibold"
          >
          Sign Up 
          </button>
      </div>
      </div>
    </div>
  );
}
