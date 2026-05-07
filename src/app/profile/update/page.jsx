"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { client } from "@/lib/auth-client";
import Link from "next/link";

export default function UpdateProfilePage() {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data } = await client.getSession();
        if (!data?.user) {
          router.push("/login");
        } else {
          setSession(data);
          setName(data.user.name || "");
          setImage(data.user.image || "");
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSaving(true);

    try {
      const result = await client.updateUser({
        name,
        image,
      });

      if (result?.error) {
        setError(result.error.message || "Update failed");
      } else {
        setSuccess("Profile updated successfully!");
        setTimeout(() => {
          router.push("/profile");
        }, 1500);
      }
    } catch (err) {
      setError(err?.message || "An error occurred during update");
    } finally {
      setIsSaving(false);
    }
  };

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <div className="max-w-7xl w-10/12 mx-auto py-12">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
              Update Profile
            </h1>

            <div className="bg-white rounded-lg shadow-lg p-8">
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}

              {success && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                  {success}
                </div>
              )}

              <form onSubmit={handleUpdate} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your photo URL"
                  />
                  {image && (
                    <div className="mt-3">
                      <p className="text-sm text-gray-600 mb-2">Preview:</p>
                      <img
                        src={image}
                        alt="Profile preview"
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="flex-1 bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 disabled:bg-gray-400 transition"
                  >
                    {isSaving ? "Updating..." : "Update Information"}
                  </button>

                  <Link
                    href="/profile"
                    className="flex-1 text-center bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-400 transition"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
