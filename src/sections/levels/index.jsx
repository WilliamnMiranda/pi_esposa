import React from 'react'

const Levels = () => {
  return (
    <section id="fases" className="py-16 bg-white transition-all duration-1000 animate-fade-in">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
        Fases do Atendimento
      </h2>

      <div className="space-y-6">

        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white shadow-lg hover:scale-105 transition-transform">
          <div className="flex items-start gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold">1</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Acionamento</h3>
              <p className="text-red-50">
                Chamado através do 192 (SAMU) ou 193 (Bombeiros). Central de regulação avalia a gravidade e despacha a equipe adequada.
              </p>
            </div>
          </div>
        </div>

  
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg hover:scale-105 transition-transform">
          <div className="flex items-start gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold">2</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Deslocamento</h3>
              <p className="text-orange-50">
                Viatura se desloca até o local da ocorrência com rapidez e segurança, utilizando sinais sonoros e luminosos quando necessário.
              </p>
            </div>
          </div>
        </div>

       
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg hover:scale-105 transition-transform">
          <div className="flex items-start gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold">3</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Atendimento no Local</h3>
              <p className="text-blue-50">
                Avaliação primária e secundária da vítima. Aplicação de protocolos de suporte básico ou avançado de vida conforme necessário.
              </p>
            </div>
          </div>
        </div>

      
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-white shadow-lg hover:scale-105 transition-transform">
          <div className="flex items-start gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold">4</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Transporte</h3>
              <p className="text-teal-50">
                Remoção segura do paciente para unidade hospitalar de referência, mantendo monitoramento contínuo durante o trajeto.
              </p>
            </div>
          </div>
        </div>

     
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg hover:scale-105 transition-transform">
          <div className="flex items-start gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold">5</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Transferência</h3>
              <p className="text-green-50">
                Passagem das informações e do paciente para a equipe hospitalar, garantindo continuidade do cuidado.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

  )
}

export default Levels