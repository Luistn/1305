import React from "react";
import { MapPin, Phone, Mail, Book } from "lucide-react";

const InfoContato = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4 section-title">Informações:</h3>

      <div className="mt-6">
        <h4 className="font-medium mb-2">Horário de Funcionamento</h4>
        <ul className="text-gray-600">
          <li className="flex items-center">
            <Book className="mr-2 text-maconaria-azul" size={18} />
            <span className="font-bold">RITO ESCOCES ANTIGO E ACEITO</span>
          </li>
          <li className="flex items-center">
            <span className="font-medium">Terça-feira:</span> <span className="ml-2">19:30</span>
          </li>
        </ul>
      </div>

      <div className="space-y-4 mt-6">
        <div className="flex items-start">
          <MapPin className="text-maconaria-azul mr-3 mt-1" size={20} />
          <div>
            <p className="font-medium">Endereço</p>
            <p className="text-gray-600">Rua Marque de Queluz, 26</p>
            <p className="text-gray-600">Irajá - Rio de Janeiro</p>
            <p className="text-gray-600">CEP 12345-678</p>
          </div>
        </div>

        <div className="flex items-center">
          <Phone className="text-maconaria-azul mr-3" size={20} />
          <div>
            <p className="font-medium">Telefone</p>
            <p className="text-gray-600">(11) 99123-4567</p>
          </div>
        </div>

        <div className="flex items-center">
          <Mail className="text-maconaria-azul mr-3" size={20} />
          <div>
            <p className="font-medium">E-mail</p>
            <p className="text-gray-600">contato@lojamaconicamoderna.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoContato;
