import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image"; // Import the Image component

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-8 text-center flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to MyApp!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sign up or log in to explore more.
        </p>
        <Image
          src="/welcome.jpg" // Use the path relative to the public directory
          alt="Descriptive alt text"
          width={500} // Specify the width of the image
          height={300} // Specify the height of the image
          className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <a
          href="/signup"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-8"
        >
          Get Started
        </a>
      </main>
      <Footer />
    </div>
  );
}
