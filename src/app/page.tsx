"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  // Estado para o chat
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState<string[]>([]);
  const userId = "1"; // exemplo: id do usuário logado (substitua pelo seu sistema de autenticação)

  // Função para enviar mensagem para a API
  const sendMessage = async () => {
    if (!message) return;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, message }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setChatLog([...chatLog, `Você: ${message}`, `Bot: ${data.message}`]);
        setMessage("");
      } else {
        setChatLog([...chatLog, `Erro: ${data.error}`]);
      }
    } catch (error) {
      setChatLog([...chatLog, `Erro: ${(error as Error).message}`]);
    }
  };

  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <section id="home" className="text-center py-24">
        <Hero />
      </section>
      <section id="about" className="py-20 px-6">
        <About />
      </section>
      <section id="features" className="py-20 px-6">
        <Features />
      </section>

      {/* Chat simples */}
      <section id="chat" className="py-10 px-6 bg-gray-900">
        <h2 className="text-2xl font-bold mb-4">Chat</h2>
        <div className="mb-4 max-h-64 overflow-y-auto border p-4 rounded">
          {chatLog.map((msg, idx) => (
            <p key={idx}>{msg}</p>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 p-2 rounded text-black"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
