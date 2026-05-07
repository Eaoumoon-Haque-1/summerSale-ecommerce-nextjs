"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { useRouter } from "next/navigation";
import products from "@/data/products.json";
import { useState } from "react";

export default function ProductsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((p) => p.category)),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <div className="max-w-7xl w-10/12 mx-auto py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">All Products</h1>

            {/* Category Filter */}
            <div className="flex gap-2 mb-8 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-orange-500"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative pb-2/3 bg-gray-200 h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 mb-2">{product.brand}</p>

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm font-medium text-gray-700">
                        {product.rating}
                      </span>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        product.stock > 0
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="text-2xl font-bold text-orange-500">
                      ${product.price}
                    </p>
                  </div>

                  <button
                    onClick={() => router.push(`/products/${product.id}`)}
                    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-semibold"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
