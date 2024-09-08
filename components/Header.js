const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <a
          href="/"
          className="text-xl font-bold transition-transform duration-300 ease-in transform hover:scale-105"
        >
          MyApp
        </a>
        <div>
          <a
            href="/login"
            className="mr-4 transition-colors duration-300 ease-in hover:text-gray-400 hover:underline"
          >
            Login
          </a>
          <a
            href="/signup"
            className="transition-colors duration-300 ease-in hover:text-gray-400 hover:underline"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
