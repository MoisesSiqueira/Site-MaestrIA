"use client";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center text-center min-h-screen bg-[#0a0a0a] text-white px-6"
    >
      {/* LOGO GRANDE E CENTRALIZADO */}
      <div className="mb-10">
        <Image
          src={logo}
          alt="Logo MaestrIA"
          width={420} // Tamanho ideal: grande, mas não exagerado
          height={420}
          className="mx-auto drop-shadow-[0_0_30px_#00ffff40]"
        />
      </div>

      {/* TÍTULO 3D SUAVE */}
      <h1
        className="text-6xl md:text-7xl font-extrabold mb-6 relative"
        style={{
          textShadow:
            "2px 2px 0 #0ff2, 4px 4px 8px rgba(0,255,255,0.25)",
          color: "#e6faff",
        }}
      >
        Seu Agente <span className="text-cyan-400">IA Inteligente</span>
      </h1>

      {/* SUBTÍTULO */}
      <p className="text-lg text-gray-300 max-w-2xl mb-8">
        O <span className="text-cyan-400 font-semibold">MaestrIA Agent</span> combina
        automação, inteligência e personalização para transformar a forma como
        sua empresa interage com clientes e dados.
      </p>

      {/* BOTÃO */}
      <a
        href="#about"
        className="bg-cyan-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 transition shadow-[0_0_20px_#00ffff40]"
      >
        Começar agora
      </a>
    </section>
  );
}
