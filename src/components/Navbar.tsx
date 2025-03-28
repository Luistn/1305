import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrollado, setScrollado] = useState(false);
  const location = useLocation();

  // Monitora o scroll para adicionar sombra ao menu quando scrollar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollado(true);
      } else {
        setScrollado(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lista de itens do menu
  const menuItens = [
    { titulo: "INÍCIO", caminho: "/" },
    { titulo: "GALERIA", caminho: "/galeria" },
    { titulo: "EVENTOS", caminho: "/eventos" },
    { titulo: "TRABALHOS", caminho: "/trabalhos" },
    { titulo: "ADMINISTRAÇÃO", caminho: "/administracao" },
    { titulo: "CONTATO", caminho: "/contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollado ? "shadow-lg bg-maconaria-azul" : "bg-maconaria-azul"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
                        <img 
              src="/gobrj.png" 
              alt="Grande Oriente do Brasil" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-white text-xl font-bold">Barão de Cayru 1305</span>
          </Link>

          {/* Menu para Desktop */}
          <div className="hidden lg:flex space-x-8">
            {menuItens.map((item) => (
              <Link
                key={item.caminho}
                to={item.caminho}
                className={`text-white hover:text-blue-200 transition-colors ${
                  location.pathname === item.caminho ? "font-bold border-b-2 border-white" : ""
                }`}
              >
                {item.titulo}
              </Link>
            ))}
          </div>

          {/* Botão do menu mobile */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="lg:hidden text-white focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Menu Mobile */}
        {menuAberto && (
          <div className="lg:hidden py-3 pb-4">
            <div className="flex flex-col space-y-3">
              {menuItens.map((item) => (
                <Link
                  key={item.caminho}
                  to={item.caminho}
                  className={`text-white hover:text-blue-200 px-3 py-2 transition-colors ${
                    location.pathname === item.caminho ? "bg-blue-700 rounded-md" : ""
                  }`}
                  onClick={() => setMenuAberto(false)}
                >
                  {item.titulo}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;