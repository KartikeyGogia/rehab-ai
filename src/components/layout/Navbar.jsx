import { Menu } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <img
          src={logo}
          alt="Rehab AI"
          className="h-10 w-auto cursor-pointer"
        />

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-sm font-medium hover:text-blue-600">
            Features
          </a>
          <a href="#" className="text-sm font-medium hover:text-blue-600">
            AI Coach
          </a>
          <a href="#" className="text-sm font-medium hover:text-blue-600">
            Exercises
          </a>
          <a href="#" className="text-sm font-medium hover:text-blue-600">
            Pricing
          </a>
          <a href="#" className="text-sm font-medium hover:text-blue-600">
            About
          </a>
        </nav>

        <Link
        to="/signup"
        className="rounded-full bg-[#F67D72] px-8 py-3 text-white font-semibold hover:bg-[#ef6c61] transition"
        >
        Get Started
        </Link>

        <Menu className="h-6 w-6 cursor-pointer md:hidden" />
      </div>
    </header>
  );
}

export default Navbar;