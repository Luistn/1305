
import React from "react";
import Banner from "@/components/Banner";
import InfoContato from "@/components/InfoContato";
import AniversariantesMes from "@/components/AniversariantesMes";
import EventosDestaque from "@/components/EventosDestaque";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      {/* Banner Principal */}
      <Banner />
      
      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna da Esquerda - Informações de Contato */}
          <div className="lg:col-span-1">
            <InfoContato />
          </div>
          
          {/* Coluna Central - Eventos */}
          <div className="lg:col-span-1 order-first lg:order-none">
            <EventosDestaque />
          </div>
          
          {/* Coluna da Direita - Aniversariantes */}
          <div className="lg:col-span-1">
            <AniversariantesMes />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
