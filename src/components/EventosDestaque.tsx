
import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dados simulados de eventos
const eventosProximos = [
  {
    titulo: "Sessão Solene de Iniciação",
    data: "15/05/2023",
    hora: "20:00",
    local: "Templo Principal",
    descricao: "Cerimônia de iniciação de novos membros."
  },
  {
    titulo: "Palestra sobre Simbolismo",
    data: "22/05/2023",
    hora: "19:30",
    local: "Sala de Estudos",
    descricao: "Palestra especial com o Ir.'. Roberto Mendes sobre os símbolos maçônicos e seus significados ocultos."
  },
  {
    titulo: "Jantar de Confraternização",
    data: "29/05/2023",
    hora: "21:00",
    local: "Salão de Festas",
    descricao: "Jantar comemorativo de aniversário da Loja com familiares."
  }
];

const EventosDestaque = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6 section-title">Próximos Eventos</h2>
      
      <div className="grid grid-cols-1 gap-6">
        {eventosProximos.map((evento, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-maconaria-azul p-4 text-white">
              <h3 className="text-xl font-bold">{evento.titulo}</h3>
            </div>
            
            <div className="p-4">
              <div className="flex items-center mb-3">
                <Calendar className="text-maconaria-azulClaro mr-2" size={18} />
                <span>{evento.data}</span>
              </div>
              
              <div className="flex items-center mb-3">
                <Clock className="text-maconaria-azulClaro mr-2" size={18} />
                <span>{evento.hora}</span>
              </div>
              
              <div className="flex items-center mb-4">
                <MapPin className="text-maconaria-azulClaro mr-2" size={18} />
                <span>{evento.local}</span>
              </div>
              
              <p className="text-gray-600 mb-4">{evento.descricao}</p>
              
              <Button 
                className="w-full bg-maconaria-azul hover:bg-maconaria-azulClaro text-white font-medium rounded-md 
                          transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-md"
              >
                Mais Detalhes
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button 
          variant="outline" 
          className="border-2 border-maconaria-azul text-maconaria-azul hover:bg-maconaria-azul hover:text-white
                    font-medium rounded-md px-6 py-2 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-md"
        >
          Ver Todos os Eventos
        </Button>
      </div>
    </div>
  );
};

export default EventosDestaque;
