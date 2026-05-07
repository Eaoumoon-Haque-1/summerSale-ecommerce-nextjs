"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import products from "@/data/products.json";

export default function HomePage() {
  // Get 3 random popular products
  const popularProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white py-20 px-4">
          <div className="max-w-7xl w-10/12 mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Summer Sale 2024</h1>
            <p className="text-xl mb-2">
              🔥 Hot Deals: Get up to 50% OFF on all summer essentials! 🔥
            </p>
            <p className="text-lg mb-8 opacity-90">
              Find everything you need for the perfect summer experience
            </p>
            <Link
              href="/products"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="max-w-7xl w-10/12 mx-auto py-12">
          {/* Popular Products Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                Popular Products
              </h2>
              <p className="text-gray-600">
                Check out our best-selling summer products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
                      {product.name}
                    </h3>

                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm font-medium text-gray-700">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.brand}
                      </span>
                    </div>

                    <p className="text-2xl font-bold text-orange-500 mb-4">
                      ${product.price}
                    </p>

                    <Link
                      href={`/products/${product.id}`}
                      className="w-full inline-block text-center bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-semibold"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/products"
                className="inline-block text-orange-600 font-semibold hover:underline text-lg"
              >
                View All Products →
              </Link>
            </div>
          </section>

          {/* Summer Care Tips Section */}
          <section className="mb-16 bg-blue-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                Summer Care Tips
              </h2>
              <p className="text-gray-600">
                Essential tips to stay safe and comfortable during summer
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-3xl mb-3">💧</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Stay Hydrated
                </h3>
                <p className="text-gray-700">
                  Drink plenty of water throughout the day. Aim for at least 8-10
                  glasses daily to stay hydrated in the heat.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-3xl mb-3">🕶️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Protect Your Eyes
                </h3>
                <p className="text-gray-700">
                  Always wear UV-protected sunglasses to shield your eyes from
                  harmful sun rays and prevent eye damage.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-3xl mb-3">🧴</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Apply Sunscreen
                </h3>
                <p className="text-gray-700">
                  Use SPF 30 or higher sunscreen daily. Reapply every 2 hours,
                  especially after swimming or sweating.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-3xl mb-3">👕</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Wear Light Clothing
                </h3>
                <p className="text-gray-700">
                  Choose breathable, light-colored fabrics to stay cool and allow
                  your skin to breathe in hot weather.
                </p>
              </div>
            </div>
          </section>

          {/* Top Brands Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                Top Brands
              </h2>
              <p className="text-gray-600">
                Discover our trusted partner brands
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "SunShade", logo: "🕶️" },
                { name: "SkinGuard", logo: "🧴" },
                { name: "ComfortZone", logo: "👕" },
                { name: "AquaStyle", logo: "🏖️" },
              ].map((brand) => (
                <div
                  key={brand.name}
                  className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-3">{brand.logo}</div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {brand.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Premium quality products for your summer needs
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

