"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";

const menuLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "https://twitter.com", label: "Twitter", external: true },
  { href: "https://instagram.com", label: "Instagram", external: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo size={36} />
        </Link>

        {/* Download Button with Dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn-primary text-sm py-2.5 px-5 flex items-center gap-2"
          >
            Download
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-3 w-56 glass-strong rounded-2xl p-2 shadow-xl shadow-black/20">
              {/* App Store Links */}
              <a
                href="https://apps.apple.com/app/id6755793398"
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span className="text-sm font-medium">App Store</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <span className="text-sm font-medium">Google Play</span>
              </a>

              {/* Divider */}
              <div className="my-2 border-t border-white/10" />

              {/* Other Links */}
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-[#8a8a9a] hover:text-[#f0f0f5]"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-sm">{link.label}</span>
                  {link.external && (
                    <svg className="w-3 h-3 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
