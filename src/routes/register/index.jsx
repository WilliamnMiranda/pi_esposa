import React from 'react';
import HeaderReturn from '../../sections/headerReturn';

const Register = () => {
  return (
    <div className="flex-row w-full mt-12">
      <HeaderReturn />
      <div>
           <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Container principal */}
      <div className="max-w-4xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm mb-6">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-activity w-10 h-10 text-blue-600">
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Formulário do Paciente
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Preencha este formulário com informações médicas precisas.
          </p>
        </div>

        {/* Formulário principal */}
        <form className="space-y-8">

          {/* Informações pessoais */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6 border-b border-gray-100 pb-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-user">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Informações Pessoais</h3>
                <p className="text-sm text-gray-500">Detalhes básicos de identificação</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="João"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 
                  focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Sobrenome <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Silva"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 
                  focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Data de Nascimento <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 
                  focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Gênero</label>
                <select
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 appearance-none 
                  focus:ring-2 focus:ring-blue-500 focus:bg-white"
                >
                  <option value="">Selecione...</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Prefiro não informar">Prefiro não informar</option>
                </select>
              </div>

            </div>
          </div>

          {/* Sinais vitais */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6 border-b border-gray-100 pb-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-activity"
                >
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Sinais Vitais & Medidas Físicas</h3>
                <p className="text-sm text-gray-500">Informações corporais atuais</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Altura (cm)
                </label>
                <input
                  type="number"
                  placeholder="175"
                  className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                  focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Peso (kg)
                </label>
                <input
                  type="number"
                  placeholder="70"
                  className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                  focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Tipo Sanguíneo
                </label>
                <select
                  className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                  focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none"
                >
                  <option value="">Selecione...</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>
            </div>
          </div>

          {/* Histórico Médico */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6 border-b border-gray-100 pb-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="none" stroke="currentColor"
                  strokeWidth="2" className="lucide lucide-file-text">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Histórico Médico</h3>
                <p className="text-sm text-gray-500">Condições existentes e sensibilidades</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Alergias
                </label>
                <textarea
                  rows="3"
                  placeholder="Liste medicamentos ou alimentos"
                  className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                  focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Medicamentos
                </label>
                <textarea
                  rows="3"
                  placeholder="Liste medicamentos em uso e dosagens..."
                  className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                  focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Condições Crônicas / Cirurgias Passadas
                </label>
                <textarea
                  rows="3"
                  placeholder="Diabetes, Hipertensão etc"
                  className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                  focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
                />
              </div>

            </div>
          </div>

          {/* Contato de Emergência */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6 border-b border-gray-100 pb-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="none" stroke="currentColor"
                  strokeWidth="2" className="lucide lucide-circle-alert">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Contato de Emergência
                </h3>
                <p className="text-sm text-gray-500">
                  Pessoa a ser contatada em caso de emergência
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nome do Contato <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                  focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Relação
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                  focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Telefone de Emergência <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder=""
                  className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                  focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>

            </div>
          </div>

          {/* Botão */}
          <div className="flex justify-end pt-4 pb-12">
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg 
              bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 active:translate-y-0 transition-all"
            >
              Enviar Registro Médico

              <svg xmlns="http://www.w3.org/2000/svg"
                width="20" height="20" fill="none"
                stroke="currentColor" strokeWidth="2"
                className="lucide lucide-circle-check">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </button>
          </div>

        </form>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Register;
