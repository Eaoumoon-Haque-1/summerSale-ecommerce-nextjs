"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { client } from "@/lib/auth-client";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data } = await client.getSession();
        if (!data?.user) {
          router.push("/login");
        } else {
          setSession(data);
        }
      } catch (error) {
        console.error("Error checking session:", error);
        router.push("/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  const user = session.user;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <div className="max-w-7xl w-10/12 mx-auto py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">My Profile</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6">
                {user.image && (
                  <div className="mb-4">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                  </div>
                )}

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                  {user.name}
                </h2>

                <p className="text-gray-600 text-center mb-6">{user.email}</p>

                <Link
                  href="/profile/update"
                  className="w-full inline-block text-center bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-semibold"
                >
                  Update Information
                </Link>
              </div>
            </div>

            {/* Profile Details */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Profile Information
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <p className="text-lg text-gray-900 mt-1">{user.name}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <p className="text-lg text-gray-900 mt-1">{user.email}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Member Since
                    </label>
                    <p className="text-lg text-gray-900 mt-1">
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Account Status
                    </label>
                    <p className="text-lg text-green-600 mt-1 font-semibold">
                      Active
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    💡 Account Tips
                  </h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>✓ Keep your profile information up to date</li>
                    <li>✓ Use a strong password for security</li>
                    <li>✓ Review your recent orders regularly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
