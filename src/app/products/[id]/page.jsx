"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import products from "@/data/products.json";
import { client } from "@/lib/auth-client";

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data } = await client.getSession();
        if (!data?.user) {
          router.push("/login");
        } else {
          setSession(data);
          const prod = products.find((p) => p.id === parseInt(params.id));
          setProduct(prod);
        }
      } catch (error) {
        console.error("Error checking session:", error);
        router.push("/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, [params.id, router]);

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

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl text-gray-600">Product not found</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-gray-600 font-medium">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-800 mt-2">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600 mt-1">by {product.brand}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < Math.round(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="font-semibold text-gray-700">
                  {product.rating} out of 5
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-4xl font-bold text-orange-500">
                  ${product.price}
                </p>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <p
                  className={`text-lg font-semibold ${
                    product.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Add to Cart Button */}
              <button
                disabled={product.stock === 0}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 disabled:bg-gray-400 transition font-semibold text-lg"
              >
                {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
              </button>

              {/* Additional Info */}
              <div className="mt-8 border-t pt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Features
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ High-quality materials</li>
                  <li>✓ Perfect for summer activities</li>
                  <li>✓ Comfortable and durable</li>
                  <li>✓ Great value for money</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
