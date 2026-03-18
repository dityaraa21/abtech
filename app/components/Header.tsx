"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Tentang Kami",
      href: "#about",
    },
    {
      name: "Layanan",
      href: "#services",
    },
    {
      name: "Proyek",
      href: "#projects",
    },
    {
      name: "Kontak",
      href: "#contact",
    },
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 w-10 bg-[#0066CC] rounded flex items-center justify-center text-white font-bold text-xl mr-3">E</div>
            <div>
              <span className="block text-xl font-bold text-slate-900 leading-none">PT. ABDI TEKNIK</span>
              <span className="block text-sm font-medium text-[#DC2626] tracking-wider">ELEVATOR</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-[#0066CC] transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="accent" size="sm" leftIcon={<Phone className="h-4 w-4" />}>
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-[#0066CC] hover:bg-slate-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <Button variant="accent" className="w-full" leftIcon={<Phone className="h-4 w-4" />}>
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
