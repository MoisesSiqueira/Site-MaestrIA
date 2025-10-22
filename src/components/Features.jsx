export default function Features() {
  return (
    <section className="text-center py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-8">Recursos Principais</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-sky-400 mb-4">Chat Inteligente</h3>
          <p>Converse com uma IA treinada para responder dúvidas e auxiliar em processos.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-sky-400 mb-4">Integrações</h3>
          <p>Integre facilmente com ferramentas de produtividade e plataformas de comunicação.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-sky-400 mb-4">Automação</h3>
          <p>Automatize fluxos de trabalho e economize tempo com inteligência artificial.</p>
        </div>
      </div>
    </section>
  );
}
