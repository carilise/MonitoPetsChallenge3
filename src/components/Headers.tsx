"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import LanguageSelector from "./LanguageSelector";
import logo from "../assets/img/LogoMonito.png";
import { Link } from 'react-router-dom';


export default function Headers() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      console.log({ isScrolled });
      setScrolled(isScrolled);
    };
    handleScroll();
    document.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full bg-transparent 
        ${scrolled ? "bg-black" : ""}
           px-4 sm:px-6 md:px-10 py-4 z-30 overflow-x-hidden `}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="hidden md:flex items-center">
          <img src={logo} alt="Monitö Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Nav */}
      
        <nav className="hidden md:flex items-center gap-6 text-[#003459]">
          <Link to="/" className="hover:text-purple-400 font-medium">
            Home
          </Link>
          <Link to="/Category" className="hover:text-purple-400 font-medium">
            Categories
          </Link>
          <Link to="/about" className="hover:text-purple-400 font-medium">
            About
          </Link>
          <Link to="/contact" className="hover:text-purple-400 font-medium">
            Contact
          </Link>
        </nav>
      
    

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <div className="relative w-[200px]">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search something here!"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 text-sm text-[#003459] placeholder-[#99A2A5] focus:outline-none"
            />
          </div>

          <button className="bg-[#003459] text-white px-6 py-2 rounded-full border border-[#003459] hover:bg-white hover:text-[#003459] transition">
            Join the community
          </button>

          <LanguageSelector />
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Menu toggle */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-[#003459]" />
            ) : (
              <Menu className="w-6 h-6 text-[#003459]" />
            )}
          </button>

          {/* Logo */}
          <img src={logo} alt="Monitö Logo" className="h-8 w-auto" />

          {/* Search icon */}
          <button onClick={() => setShowSearchMobile(!showSearchMobile)}>
            <FaSearch className="w-5 h-5 text-[#003459]" />
          </button>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {showSearchMobile && (
        <div className="fixed inset-0 z-50 bg-[#FFE7BA]/30 backdrop-blur-sm flex justify-center items-start overflow-hidden">
          <div className="absolute top-6 w-[90vw] max-w-[400px] bg-white rounded-full px-4 py-2 flex items-center shadow-md">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search something here!"
              className="flex-grow bg-transparent text-[#003459] placeholder-[#99A2A5] focus:outline-none"
            />
            <button onClick={() => setShowSearchMobile(false)}>
              <FaTimes className="text-gray-400 hover:text-gray-600 ml-2" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-2 sm:px-4">
          <nav className="flex flex-col space-y-3 text-[#003459]">
            <a href="/" className="hover:text-purple-400 font-medium">
              Home
            </a>
            <a href="/category" className="hover:text-purple-400 font-medium">
              Categories
            </a>
            <a href="/about" className="hover:text-purple-400 font-medium">
              About
            </a>
            <a href="/contact" className="hover:text-purple-400 font-medium">
              Contact
            </a>
          </nav>

          {/* LanguageSelector visible sans scroll */}
          <LanguageSelector />

          <div className="pt-4 border-t border-gray-300 space-y-4">
            <button className="bg-[#003459] px-4 py-2 border border-[#003459] text-white rounded-full hover:bg-white hover:text-[#003459] transition">
              Join the community
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
