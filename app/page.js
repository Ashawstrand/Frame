import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <header className="w-full px-6 py-4 flex items-center justify-between bg-black">
        <Image
          src="/FrameLogo.png"
          alt="Frame logo"
          width={300}
          height={300}
        />
        <Link
          href="/login"
          className="flex items-center justify-center mr-4 px-8 py-4 text-xl font-semibold rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          Sign In
        </Link>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-16 w-full bg-white dark:bg-black text-center">
        <h2 className="max-w-xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold leading-15 tracking-tight text-black dark:text-zinc-50 mb-60">
          All your favorite movies, right here.
        </h2>
      </main>
    </div>
  );
}
