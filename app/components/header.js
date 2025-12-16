import Link from "next/link";
import Image from "next/image";


export default function Header() {

    return(
        <header className="w-full px-6 flex items-center justify-between bg-black">
        <Link href="/" className="flex items-center">
          <Image
            className="w-48 sm:w-64 md:w-72 lg:w-80 h-auto"
            src="/FrameLogo.png"
            alt="Frame logo"
            width={300}
            height={300}
          />
        </Link>
        <Link
          href="/login"
          className="flex items-center justify-center mr-4 px-8 py-4 text-xl font-semibold rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          Sign In
        </Link>
      </header>

    );
}