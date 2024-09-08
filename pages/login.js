import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image"; // For using Next.js optimized images

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4 md:p-8 bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full">
          {/* Left side - Image */}
          <div className="hidden md:flex w-full md:w-1/2 bg-blue-500 rounded-l-lg overflow-hidden">
            <Image
              src="/login.jpg" // Correct path without 'public'
              alt="Login Image"
              className="object-cover w-full h-full"
              width={500}
              height={600}
            />
          </div>

          {/* Right side - Form */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Login
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
