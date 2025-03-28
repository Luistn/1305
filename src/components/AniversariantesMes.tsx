
import React from "react";
import { Calendar, Gift } from "lucide-react";

// Dados simulados de aniversariantes
const aniversariantes = [
  { nome: "Yasmin Torres", data: "04/04", grau: "Sobrinha" },
  { nome: "Brenda Heidrich", data: "12/04", grau: "Sobrinha" },
  { nome: "Bruno Moreira", data: "10/04", grau: "Companheiro" },
  { nome: "Denise Junger", data: "18/04", grau: "Cunhada" },

];

// Função para obter o nome do mês atual
const obterNomeMes = () => {
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  
  const dataAtual = new Date();
  return meses[dataAtual.getMonth()];
};

const AniversariantesMes = () => {
  const mesAtual = obterNomeMes();
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4 section-title flex items-center">
        <Gift className="mr-2 text-maconaria-azulClaro" size={24} />
        Aniversariantes de {mesAtual}
      </h3>
      
      <div className="mt-6">
        {aniversariantes.length > 0 ? (
          <ul className="space-y-3">
            {aniversariantes.map((aniversariante, index) => (
              <li key={index} className="flex items-center border-b pb-2 last:border-b-0">
                <Calendar className="text-maconaria-azul mr-3" size={16} />
                <div>
                  <p className="font-medium">{aniversariante.nome}</p>
                  <p className="text-sm text-gray-600">
                    {aniversariante.data} - {aniversariante.grau}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">Nenhum aniversariante este mês.</p>
        )}
      </div>
    </div>
  );
};

export default AniversariantesMes;
