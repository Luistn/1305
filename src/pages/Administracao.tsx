
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const administradores = [
  {
    cargo: "Venerável Mestre",
    nome: "Luis Marcos Wirth",
    foto: "/placeholder.svg"
  },
  {
    cargo: "1º Vigilante",
    nome: "Roberto Loiola",
    foto: "/placeholder.svg"
  },
  {
    cargo: "2º Vigilante",
    nome: "Edwaldo Barbosa",
    foto: "/placeholder.svg"
  },
  {
    cargo: "Orador Ad Hoc",
    nome: "Ed Cherol",
    foto: "/placeholder.svg"
  },
  {
    cargo: "Secretário",
    nome: "Thiago Mateo",
    foto: "/placeholder.svg"
  },
  {
    cargo: "Tesoureiro",
    nome: "Robson Nogueira",
    foto: "/placeholder.svg"
  }
];

const Administracao = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-16 mt-16 flex-grow">
        <h1 className="text-3xl font-bold mb-8 section-title">Administração</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {administradores.map((admin, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-maconaria-azul py-4 text-white text-center">
                <h3 className="text-lg font-medium">{admin.cargo}</h3>
              </div>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-maconaria-azulClaro">
                  <img src={admin.foto} alt={admin.nome} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-bold text-maconaria-azul">{admin.nome}</h4>
                <p className="text-gray-600 mt-2">Gestão 2023-2025</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Administracao;
