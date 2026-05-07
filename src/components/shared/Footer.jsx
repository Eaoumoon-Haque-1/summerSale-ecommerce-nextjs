export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-300">Email: info@suncart.com</p>
            <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-300">Address: 123 Summer St, Beach City, BC 12345</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                Instagram
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SunCart - Summer Essentials Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
