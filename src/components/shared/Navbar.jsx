"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { client, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data } = await client.getSession();
        setSession(data);
      } catch (error) {
        console.error("Session check error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      setSession(null);
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl w-10/12 mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-orange-500">
            SunCart
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-orange-500 transition">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-orange-500 transition">
              Products
            </Link>
            {session?.user && (
              <Link href="/profile" className="text-gray-700 hover:text-orange-500 transition">
                My Profile
              </Link>
            )}
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-3">
            {isLoading ? (
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
            ) : session?.user ? (
              <>
                {session.user.image && (
                  <img
                    src={session.user.image}
                    alt={session.user.name}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700 hidden sm:inline">
                    {session.user.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-sm"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
