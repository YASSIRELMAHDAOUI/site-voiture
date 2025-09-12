import React from "react";
import { useParams, Link } from "react-router-dom";
import { cars } from "./data";

function Detail() {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return (
      <h2 className="text-center text-red-500 text-2xl mt-10">
        Voiture non trouvée
      </h2>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black p-6 relative">
      {/* Effet glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/10 to-transparent blur-3xl"></div>

      <div className="relative bg-gray-900/60 backdrop-blur-md border border-gray-700/50 shadow-2xl rounded-2xl p-10 w-full max-w-2xl text-center transform hover:scale-[1.02] transition duration-500">
        
        {/* Titre */}
        <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          {car.title}
        </h1>

        {/* Image */}
        <img
          src={car.img}
          alt={car.title}
          className="mx-auto rounded-xl shadow-lg w-full max-w-md mb-8 hover:scale-105 transition-transform duration-500"
        />

        {/* Description */}
        <p className="text-gray-300 text-lg mb-4">
          <span className="font-semibold text-white">{car.title}</span> est de
          bonne qualité avec un prix convenable :
          <span className="font-bold text-green-400 ml-2">{car.price} / jour</span>
        </p>

        <p className="text-gray-400 mb-8">{car.desc}</p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link to="/">
            <button className="px-8 py-3 rounded-full font-semibold shadow-lg 
                               bg-gradient-to-r from-gray-700 to-gray-900 
                               hover:from-gray-600 hover:to-gray-800 
                               text-white transition duration-300 
                               hover:scale-105 hover:shadow-gray-600/50">
              Retour à l'accueil
            </button>
          </Link>

          <Link to="/reservation">
            <button className="px-8 py-3 rounded-full font-semibold shadow-lg 
                               bg-gradient-to-r from-blue-500 to-indigo-600 
                               hover:from-blue-600 hover:to-indigo-700 
                               text-white transition duration-300 
                               hover:scale-105 hover:shadow-blue-500/40">
              Réserver maintenant
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detail;
