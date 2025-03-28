
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-maconaria-azul text-white">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b pb-2 border-blue-400">Loja Maçônica Moderna</h3>
            <p className="mb-4">
              Trabalhando pelo desenvolvimento moral e espiritual de seus membros e pelo bem da humanidade desde 1950.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/arlsbaraodecayru1305/" className="hover:text-blue-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:contato@.com" className="hover:text-blue-300 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b pb-2 border-blue-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300 transition-colors">Início</Link></li>
              <li><Link to="/galeria" className="hover:text-blue-300 transition-colors">Galeria</Link></li>
              <li><Link to="/eventos" className="hover:text-blue-300 transition-colors">Eventos</Link></li>
              <li><Link to="/administracao" className="hover:text-blue-300 transition-colors">Administração</Link></li>
              <li><Link to="/contato" className="hover:text-blue-300 transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b pb-2 border-blue-400">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-2 mt-1" size={18} />
                <span>Rua Marquês de Queluz, 26</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" size={18} />
                <span>(xx) xxxx-xxxx</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" size={18} />
                <span>contato@lojamaconicamoderna.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Barão de cayru. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
