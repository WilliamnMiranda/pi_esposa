import React, { useState } from "react";
import { Link } from 'react-router';
const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center py-4">

          {/* LOGO + TÍTULO */}
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-ambulance w-6 h-6 text-white"
              >
                <path d="M10 10H6"></path>
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"></path>
                <path d="M8 8v4"></path>
                <path d="M9 18h6"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900">MeuAPH</h1>
              <p className="text-xs text-gray-600">Projeto Integrador turma 2025.02.19</p>
            </div>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-red-600 transition">Serviços</a>
            <a href="#symptoms" className="text-gray-700 hover:text-red-600 transition">Sintomas</a>
            <a href="#tips" className="text-gray-700 hover:text-red-600 transition">Primeiros Socorros</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition">Contato</a>
          </nav>

          {/* BOTÃO SAMU DESKTOP (RESTAURADO) */}
      
          <div className="hidden md:flex items-center space-x-4">
              <Link
              to="/register"
            className="hidden md:flex items-center space-x-1 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition animate-pulse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone w-5 h-5"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
            </svg>
            <span className="font-bold">Cadastro Pessoal</span>
          </Link>

           <a
            href="tel:192"
            className="hidden md:flex items-center space-x-1 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition animate-pulse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone w-5 h-5"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
            </svg>
            <span className="font-bold">Buscar paciente</span>
          </a>
          </div>

          {/* ÍCONE MOBILE */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MENU MOBILE ABERTO */}
      {open && (
        <nav className="md:hidden bg-white shadow-md px-4 py-4 flex flex-col space-y-4 border-t">
          <a href="#services" className="text-gray-700" onClick={closeMenu}>Serviços</a>
          <a href="#symptoms" className="text-gray-700" onClick={closeMenu}>Sintomas</a>
          <a href="#tips" className="text-gray-700" onClick={closeMenu}>Primeiros Socorros</a>
          <a href="#contact" className="text-gray-700" onClick={closeMenu}>Contato</a>

          {/* BOTÃO SAMU MOBILE */}
          <a
            href="tel:192"
            className="bg-red-600 text-white px-4 py-3 rounded-lg text-center font-bold hover:bg-red-700"
            onClick={closeMenu}
          >
            📞 192 - SAMU
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
