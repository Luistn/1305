import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

const Trabalhos = () => {
  const [senha, setSenha] = useState("");
  const [acessoLiberado, setAcessoLiberado] = useState({
    aprendiz: false,
    companheiro: false,
    mestre: false,
  });
  const [linkAtivo, setLinkAtivo] = useState<string | null>(null);

  const senhasCorretas = {
    aprendiz: "aprendiz123",
    companheiro: "companheiro123",
    mestre: "mestre123",
  };

  // Links para os arquivos hospedados (substitua pelos links reais)
  const linksDrive = {
    aprendiz: "https://drive.google.com/embeddedfolderview?id=1VaWiUEGsKHd-qZ7IyauSjEf_NnaLfM1S#grid",
    companheiro: "https://drive.google.com/embeddedfolderview?id=EXEMPLO_LINK_COMPANHEIRO#grid",
    mestre: "https://drive.google.com/embeddedfolderview?id=EXEMPLO_LINK_MESTRE#grid",
  };
  

  const verificarSenha = (nivel: "aprendiz" | "companheiro" | "mestre") => {
    if (senha === senhasCorretas[nivel]) {
      setAcessoLiberado((prev) => ({ ...prev, [nivel]: true }));
      setLinkAtivo(linksDrive[nivel]);
    } else {
      alert("Senha incorreta!");
    }
    setSenha("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-16 mt-16 flex-grow">
        <h1 className="text-3xl font-bold mb-8 section-title">Trabalhos</h1>

        <Tabs defaultValue="aprendiz" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="aprendiz">Aprendiz</TabsTrigger>
            <TabsTrigger value="companheiro">Companheiro</TabsTrigger>
            <TabsTrigger value="mestre">Mestre</TabsTrigger>
          </TabsList>

          {/* Aprendiz */}
          <TabsContent value="aprendiz" className="p-6 border rounded-lg mt-4">
            {!acessoLiberado.aprendiz ? (
              <div className="flex flex-col items-center space-y-4 py-10">
                <Lock size={48} className="text-maconaria-azul mb-4" />
                <h3 className="text-xl font-medium text-center">Área Restrita - Aprendiz</h3>
                <p className="text-gray-600 mb-4 text-center max-w-md">
                  Esta área é restrita aos aprendizes. Por favor, digite a senha para acessar os documentos.
                </p>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input
                    type="password"
                    placeholder="Digite a senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <Button
                    onClick={() => verificarSenha("aprendiz")}
                    className="bg-maconaria-azul hover:bg-maconaria-azulClaro"
                  >
                    Acessar
                  </Button>
                </div>
              </div>
            ) : (
              <iframe
                src={linksDrive.aprendiz}
                width="100%"
                height="500"
                className="border rounded-lg"
                title="Arquivos Aprendiz"
              />
            )}
          </TabsContent>

          {/* Companheiro */}
          <TabsContent value="companheiro" className="p-6 border rounded-lg mt-4">
            {!acessoLiberado.companheiro ? (
              <div className="flex flex-col items-center space-y-4 py-10">
                <Lock size={48} className="text-maconaria-azul mb-4" />
                <h3 className="text-xl font-medium text-center">Área Restrita - Companheiro</h3>
                <p className="text-gray-600 mb-4 text-center max-w-md">
                  Esta área é restrita aos companheiros. Por favor, digite a senha para acessar os documentos.
                </p>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input
                    type="password"
                    placeholder="Digite a senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <Button
                    onClick={() => verificarSenha("companheiro")}
                    className="bg-maconaria-azul hover:bg-maconaria-azulClaro"
                  >
                    Acessar
                  </Button>
                </div>
              </div>
            ) : (
              <iframe
                src={linksDrive.companheiro}
                width="100%"
                height="500"
                className="border rounded-lg"
                title="Arquivos Companheiro"
              />
            )}
          </TabsContent>

          {/* Mestre */}
          <TabsContent value="mestre" className="p-6 border rounded-lg mt-4">
            {!acessoLiberado.mestre ? (
              <div className="flex flex-col items-center space-y-4 py-10">
                <Lock size={48} className="text-maconaria-azul mb-4" />
                <h3 className="text-xl font-medium text-center">Área Restrita - Mestre</h3>
                <p className="text-gray-600 mb-4 text-center max-w-md">
                  Esta área é restrita aos mestres. Por favor, digite a senha para acessar os documentos.
                </p>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input
                    type="password"
                    placeholder="Digite a senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <Button
                    onClick={() => verificarSenha("mestre")}
                    className="bg-maconaria-azul hover:bg-maconaria-azulClaro"
                  >
                    Acessar
                  </Button>
                </div>
              </div>
            ) : (
              <iframe
                src={linksDrive.mestre}
                width="100%"
                height="500"
                className="border rounded-lg"
                title="Arquivos Mestre"
              />
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Trabalhos;
