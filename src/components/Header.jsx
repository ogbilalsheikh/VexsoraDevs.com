import React, { useState } from "react";
import Logo from "../assets/Logo-wbg.png";
import { Menu, X } from "lucide-react";
import HireMe from "./HireMe";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const base = import.meta.env.BASE_URL;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const homeUrl = base;

  const navLinks = [
    { name: "Home", href: homeUrl },
    { name: "Services", href: `${base}#services` },
    { name: "Projects", href: `${base}#pricing` },
    { name: "About", href: `${base}#about` },
    { name: "Contact", href: `${base}#contact` },
  ];

  return (
  <header className="sticky top-4 z-50 m-4 flex h-[70px] items-center justify-between rounded-[20px] bg-white px-3 shadow-[0_0_25px_rgba(0,0,0,0.10)] sm:px-6 lg:px-1">
      <a href={homeUrl} onClick={closeMenu}>
        <img
          className="w-[155px] sm:w-[165px] lg:w-[180px]"
          src={Logo}
          alt="VexsoraDevs Logo"
        />
      </a>

      <nav className="hidden items-center gap-5 text-sm font-medium lg:flex xl:gap-7 xl:text-base">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={closeMenu}
            className="transition-colors duration-200 hover:text-blue-600"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="hidden pr-3 lg:block">
        <HireMe />
      </div>

      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        className="p-2 lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeMenu}
      />

      <aside
        className={`fixed left-0 top-0 z-[60] h-screen w-[280px] bg-white p-5 shadow-2xl transition-transform duration-300 ease-in-out sm:w-[320px] ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <a href={homeUrl} onClick={closeMenu}>
            <img
              className="w-[155px] sm:w-[165px]"
              src={Logo}
              alt="VexsoraDevs Logo"
            />
          </a>

          <button
            type="button"
            onClick={closeMenu}
            className="p-2"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="transition-colors duration-200 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="mt-10" onClick={closeMenu}>
          <HireMe />
        </div>
      </aside>
    </header>
  );
};

export default Header;
