
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventosDestaque from "@/components/EventosDestaque";

const Eventos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 mt-16 flex-grow">
        <h1 className="text-3xl font-bold mb-8 section-title">Eventos</h1>
        <EventosDestaque />
      </div>
      
      <Footer />
    </div>
  );
};

export default Eventos;
