"use client";

import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <div className="min-h-screen flex flex-col bg-orange-50">
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl w-10/12 mx-auto py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            SunCart
          </Link>

          <div className="flex gap-3">
            <Link href="/" className="px-4 py-2 rounded-lg border border-orange-500 text-orange-500">
              Home
            </Link>

            <Link
              href={isLoginPage ? "/register" : "/login"}
              className="px-4 py-2 rounded-lg bg-orange-500 text-white"
            >
              {isLoginPage ? "Register" : "Login"}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}