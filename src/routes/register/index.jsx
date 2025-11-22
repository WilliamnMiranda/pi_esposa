import React, { useState } from "react";
import HeaderReturn from "../../sections/headerReturn";

const Register = () => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    nascimento: "",
    genero: "",
    altura: "",
    peso: "",
    sangue: "",
    alergias: "",
    medicamentos: "",
    condicoes: "",
    contatoNome: "",
    contatoRelacao: "",
    contatoTelefone: "",
  });

  // Atualiza qualquer campo automaticamente
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📌 DADOS ENVIADOS:");
    console.log(formData);
  };

  return (
    <div className="flex-row w-full mt-12">
      <HeaderReturn />

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
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

          {/* FORMULÁRIO */}
          <form className="space-y-8" onSubmit={handleSubmit}>

            {/* ================== INFORMAÇÕES PESSOAIS ================== */}
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

                {/* NOME */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nome *
                  </label>
                  <input
                    name="nome"
                    type="text"
                    placeholder="João"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 
                    focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>

                {/* SOBRENOME */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Sobrenome *
                  </label>
                  <input
                    name="sobrenome"
                    type="text"
                    placeholder="Silva"
                    value={formData.sobrenome}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 
                    focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>

                {/* NASCIMENTO */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Data de Nascimento *
                  </label>
                  <input
                    name="nascimento"
                    type="date"
                    value={formData.nascimento}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 
                    focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>

                {/* GENERO */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Gênero
                  </label>
                  <select
                    name="genero"
                    value={formData.genero}
                    onChange={handleChange}
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

            {/* ================== SINAIS VITAIS ================== */}
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    Sinais Vitais & Medidas Físicas
                  </h3>
                  <p className="text-sm text-gray-500">Informações corporais atuais</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">

                {/* ALTURA */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Altura (cm)
                  </label>
                  <input
                    name="altura"
                    type="number"
                    placeholder="175"
                    value={formData.altura}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                    focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>

                {/* PESO */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Peso (kg)
                  </label>
                  <input
                    name="peso"
                    type="number"
                    placeholder="70"
                    value={formData.peso}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                    focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>

                {/* TIPO SANGUÍNEO */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tipo Sanguíneo
                  </label>
                  <select
                    name="sangue"
                    value={formData.sangue}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                    focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none"
                  >
                    <option value="">Selecione...</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

              </div>
            </div>

            {/* ================== HISTÓRICO MÉDICO ================== */}
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

                {/* ALERGIAS */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Alergias
                  </label>
                  <textarea
                    name="alergias"
                    rows="3"
                    placeholder="Liste medicamentos ou alimentos"
                    value={formData.alergias}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                    focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
                  />
                </div>

                {/* MEDICAMENTOS */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Medicamentos
                  </label>
                  <textarea
                    name="medicamentos"
                    rows="3"
                    placeholder="Liste medicamentos em uso e dosagens..."
                    value={formData.medicamentos}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                    focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
                  />
                </div>

                {/* CONDIÇÕES */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Condições Crônicas / Cirurgias Passadas
                  </label>
                  <textarea
                    name="condicoes"
                    rows="3"
                    placeholder="Diabetes, Hipertensão etc"
                    value={formData.condicoes}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                    focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
                  />
                </div>

              </div>
            </div>

            {/* ================== CONTATO DE EMERGÊNCIA ================== */}
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

                {/* NOME DO CONTATO */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nome do Contato *
                  </label>
                  <input
                    name="contatoNome"
                    type="text"
                    value={formData.contatoNome}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                    focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>

                {/* RELAÇÃO */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Relação
                  </label>
                  <input
                    name="contatoRelacao"
                    type="text"
                    value={formData.contatoRelacao}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                    focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>

                {/* TELEFONE */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Telefone de Emergência *
                  </label>
                  <input
                    name="contatoTelefone"
                    type="tel"
                    value={formData.contatoTelefone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 border-gray-300 
                    focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>

              </div>
            </div>

            {/* BOTÃO DE ENVIO */}
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
  );
};

export default Register;
