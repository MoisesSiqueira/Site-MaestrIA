"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md text-white flex justify-between items-center px-10 py-4 z-50 shadow-lg">
      
      {/* LOGO NO CANTO ESQUERDO - MAIOR E FIXO */}
      <div className="flex items-center space-x-3">
        <Image
          src={logo}
          alt="Logo MaestrIA"
          width={80}   // Aumente aqui (ex: 80 → 100 se quiser ainda maior)
          height={80}
          className="drop-shadow-[0_0_15px_#00ffff60] transition-transform hover:scale-110 cursor-pointer"
        />
        <h1 className="text-2xl font-bold text-cyan-400">MaestrIA</h1>
      </div>

      {/* MENU DE NAVEGAÇÃO */}
      <div className="hidden md:flex space-x-8 font-medium">
        <Link href="#home" className="hover:text-cyan-400 transition">Início</Link>
        <Link href="#about" className="hover:text-cyan-400 transition">Sobre</Link>
        <Link href="#features" className="hover:text-cyan-400 transition">Recursos</Link>
        <Link href="#contact" className="hover:text-cyan-400 transition">Contato</Link>
      </div>

      {/* BOTÃO MOBILE */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none text-cyan-400 text-3xl"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0a]/95 text-center py-6 flex flex-col space-y-4 md:hidden shadow-lg border-t border-cyan-400/20">
          <Link href="#home" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition">Início</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition">Sobre</Link>
          <Link href="#features" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition">Recursos</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition">Contato</Link>
        </div>
      )}
    </nav>
  );
}
 