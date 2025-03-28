
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Galeria = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-16 mt-16 flex-grow">
        <h1 className="text-3xl font-bold mb-8 section-title">Galeria de Fotos</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Exemplos de fotos */}
          {[1, 2, 3, 4, 5, 6, 8, 9].map((item) => (
            <div key={item} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 aspect-square flex items-center justify-center">
                <span className="text-gray-500">Foto {item}</span>
              </div>
              <div className="p-3 bg-white">
                <h3 className="font-medium text-maconaria-azul">Evento {item}</h3>
                <p className="text-sm text-gray-600">Descrição do evento</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Galeria;
