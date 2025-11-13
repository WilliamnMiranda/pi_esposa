import React from 'react'

const Index = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-red-600 via-red-700 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - texto principal */}
          <div className="fade-in-section visible">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Disponível 24 horas por dia</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Atendimento de Emergência Quando Você Mais Precisa
            </h2>

            <p className="text-xl mb-8 text-gray-100">
              Equipe médica especializada pronta para atender qualquer emergência. Resposta rápida,
              cuidado profissional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:192"
                className="flex items-center justify-center space-x-3 bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-bold text-lg shadow-xl"
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
                  className="lucide lucide-phone w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                <span>Ligar 192 - SAMU</span>
              </a>

              <a
                href="#services"
                className="flex items-center justify-center space-x-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition font-bold text-lg"
              >
                <span>Ver Serviços</span>
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
                  className="lucide lucide-chevron-down w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-gray-200">Disponível</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold">&lt;15min</div>
                <div className="text-sm text-gray-200">Tempo Resposta</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-gray-200">Cobertura</div>
              </div>
            </div>
          </div>

          {/* Lado direito - cartões */}
          <div className="md:block fade-in-section visible">
            <div className="block fade-in-section visible">
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-3xl transform rotate-6"></div>

                <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    {/* SAMU */}
                    <div className="flex items-center space-x-4 bg-white/30 p-4 rounded-xl">
                      <div className="bg-red-600 p-3 rounded-lg">
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
                          className="lucide lucide-phone w-6 h-6 text-white"
                          aria-hidden="true"
                        >
                          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-lg">SAMU - 192</div>
                        <div className="text-sm text-gray-200">Ambulância de Emergência</div>
                      </div>
                    </div>

                    {/* Bombeiros */}
                    <div className="flex items-center space-x-4 bg-white/30 p-4 rounded-xl">
                      <div className="bg-blue-900 p-3 rounded-lg">
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
                          className="lucide lucide-phone w-6 h-6 text-white"
                          aria-hidden="true"
                        >
                          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-lg">Bombeiros - 193</div>
                        <div className="text-sm text-gray-200">Resgate e Emergências</div>
                      </div>
                    </div>

                    {/* UPA */}
                    <div className="flex items-center space-x-4 bg-white/30 p-4 rounded-xl">
                      <div className="bg-amber-600 p-3 rounded-lg">
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
                          className="lucide lucide-map-pin w-6 h-6 text-white"
                          aria-hidden="true"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-lg">UPA Mais Próxima</div>
                        <div className="text-sm text-gray-200">Localização Automática</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
