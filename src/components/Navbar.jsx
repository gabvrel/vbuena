import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../css/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => { setMenuOpen(false); setDropdownOpen(false); };
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="top-0 left-0 right-0 z-50 px-10 py-4">
      <div className="flex items-center justify-between w-full">

        <a href="/" className="flex items-center gap-2">
          <img src="/images/logo_main.png" alt="Vida Sana" className="h-20 w-auto object-contain" />
        </a>

        <button className="md:hidden text-3xl focus:outline-none" onClick={toggleMenu}>☰</button>

        <ul className="navbar-center-md hidden md:flex gap-12 text-base font-medium">
          {[
            { to: "/", label: "Inicio", end: true },
            { to: "/nosotros", label: "Nosotros" },
            { to: "/contact", label: "Contacto" },
            { to: "/planes", label: "Planes" },
            { to: "/medical-networks", label: "Red Médica" },
            { to: "/quote", label: "Cotizador" },
            { to: "/formularios", label: "Formularios" },
            { to: "/tutoriales", label: "Centro de Ayuda" },
          ].map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4 decoration-2" : ""
                }
              >
                {label}
              </NavLink>
            </li>
          ))}

          <li className="relative">
            <button onClick={toggleDropdown} className="flex items-center gap-1 focus:outline-none">
              Portales <span className="text-sm">▾</span>
            </button>
            {dropdownOpen && (
              <ul className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 w-48 z-50">
                <li>
                  <a href="https://portal.vidabuena.ec" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100">
                    Portal VB Connect
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>

      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md rounded-b-lg z-50">
          <ul className="flex flex-col gap-4 text-center text-gray-800 p-4">
            {[
              { to: "/", label: "Inicio", end: true },
              { to: "/nosotros", label: "Nosotros" },
              { to: "/contact", label: "Contacto" },
              { to: "/planes", label: "Planes" },
              { to: "/medical-networks", label: "Red Médica" },
              { to: "/quote", label: "Cotizador" },
              { to: "/formularios", label: "Formularios" },
              { to: "/tutoriales", label: "Centro de Ayuda" },
            ].map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "underline underline-offset-4 decoration-2" : ""
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <button onClick={toggleDropdown} className="w-full text-left flex justify-between items-center px-4 py-2 focus:outline-none">
                Portales <span className="text-sm">▾</span>
              </button>
              {dropdownOpen && (
                <ul className="flex flex-col gap-2 mt-2">
                  <li>
                    <a href="https://portal.vidabuena.ec" target="_blank" rel="noopener noreferrer" className="block px-6 py-2 hover:bg-gray-100" onClick={closeMenu}>
                      Portal Intranet
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
