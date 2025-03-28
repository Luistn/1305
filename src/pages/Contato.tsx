
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 mt-16 flex-grow">
        <h1 className="text-3xl font-bold mb-8 section-title">Contato</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-maconaria-azul">Informações de Contato</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-maconaria-azul mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold">Endereço</h3>
                  <p className="text-gray-600">
                    Rua Marque de Queluz, 26<br />
                    Iraja<br />
                    Rio de janeiro<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-maconaria-azul mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold">Telefone</h3>
                  <p className="text-gray-600">(11) 1234-5678</p>
                  <p className="text-gray-600">(11) 98765-4321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-maconaria-azul mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">contato@lojamaconicamoderna.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-maconaria-azul">Horário de Funcionamento</h2>
            
            
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Terça-feira:</span>
                <span>19:30</span>
              </div>
                      </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contato;
