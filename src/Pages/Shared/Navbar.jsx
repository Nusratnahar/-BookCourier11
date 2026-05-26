import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "../../Components/ui/button";
import Logo from "../../../src/assets/Logo.svg";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Books", path: "/books" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="bg-[#fffcfce4] dark:bg-[#14110f] shadow-md sticky top-0 z-50 mx-3 rounded-xl border border-[#e5d6c8] dark:border-[#2a211d] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

         
          <Link to="/" className="flex items-center gap-2 group">
            <img src={Logo} alt="BookCourier Logo" className="w-8 h-8" />
            <span className="font-bold text-xl text-black dark:text-[#f5e8dc]">
              Book<span className="text-[#5a3e2b]">Courier</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-all duration-300
                ${
                  location.pathname === link.path
                    ? "text-[#5a3e2b]"
                    : "text-gray-600 dark:text-gray-400 hover:text-[#5a3e2b] dark:hover:text-[#d6b08a]"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#5a3e2b]
                  transition-all duration-300
                  ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

          </div>

          {/* ACTION BUTTONS */}
          <div className="hidden md:flex items-center gap-3">

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-[#5a3e2b]/10 hover:text-[#5a3e2b] transition"
            >
              {isDarkMode ? <Sun /> : <Moon />}
            </Button>

            <Link to="/login">
              <Button
                variant="outline"
                className="border-[#5a3e2b] text-[#5a3e2b]
                           hover:bg-[#5a3e2b] hover:text-white
                           transition-all duration-300"
              >
                Login
              </Button>
            </Link>

            <Link to="/register">
              <Button
                className="bg-[#5a3e2b] text-white
                           hover:bg-[#3b2a1f]
                           transition-all duration-300
                           hover:scale-105 active:scale-95"
              >
                Register
              </Button>
            </Link>

          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-2">

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-[#5a3e2b]/10 hover:text-[#5a3e2b]"
            >
              {isDarkMode ? <Sun /> : <Moon />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-[#5a3e2b]/10"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#e5d6c8] dark:border-[#2a211d]">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 font-medium transition
                ${
                  location.pathname === link.path
                    ? "text-[#5a3e2b]"
                    : "text-gray-600 dark:text-gray-400 hover:text-[#5a3e2b]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex gap-2 mt-4">

              <Link to="/login" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-[#5a3e2b] text-[#5a3e2b]
                             hover:bg-[#5a3e2b] hover:text-white"
                >
                  Login
                </Button>
              </Link>

              <Link to="/register" className="flex-1">
                <Button
                  className="w-full bg-[#5a3e2b] text-white
                             hover:bg-[#3b2a1f]"
                >
                  Register
                </Button>
              </Link>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;