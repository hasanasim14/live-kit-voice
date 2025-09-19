"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navigationItems = [
    { label: "About Us", href: "/" },
    { label: "Courier", href: "/" },
    { label: "Logistics", href: "/" },
    { label: "COD", href: "/" },
    { label: "Business Solutions", href: "/" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isMenuOpen
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-1 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="z-50 relative group">
            <Image
              src="/m&p.png"
              alt="Logo"
              width={400}
              height={600}
              className={`h-auto w-auto max-h-14 transition-transform duration-300 ${
                scrolled ? "scale-95" : "scale-100"
              } group-hover:scale-105`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  scrolled || isMenuOpen
                    ? "text-gray-200 hover:text-orange-400"
                    : "text-white hover:text-orange-300"
                } group`}
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="z-50 md:hidden p-2 relative w-10 h-10 flex items-center justify-center group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute block w-6 h-0.5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isMenuOpen
                    ? "rotate-45 top-[11px] bg-white"
                    : "top-1 bg-white group-hover:bg-orange-400"
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isMenuOpen
                    ? "opacity-0"
                    : "opacity-100 top-[11px] bg-white group-hover:bg-orange-400"
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isMenuOpen
                    ? "-rotate-45 top-[11px] bg-white"
                    : "top-5 bg-white group-hover:bg-orange-400"
                }`}
              />
            </div>
          </button>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isMenuOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-8"
            }`}
          >
            <div className="container mx-auto px-6 py-20 flex flex-col h-full">
              <nav className="flex flex-col mt-auto mb-20 space-y-6">
                {navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`group relative text-2xl font-medium text-white transition-all duration-500 ease-out ${
                      isMenuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                    style={{
                      transitionDelay: `${index * 100 + 200}ms`,
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative inline-block overflow-hidden">
                      <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">
                        {item.label}
                      </span>
                      <span className="absolute left-0 top-full inline-block text-orange-400 transition-transform duration-500 group-hover:-translate-y-full">
                        {item.label}
                      </span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
}
