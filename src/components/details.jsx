import React from "react";
import { useParams, Link } from "react-router-dom";
import { cars } from "./data";

function Detail() {
  const { id } = useParams();
  const car = cars.find(car => car.id === parseInt(id));

  if (!car) {
    return <h2 className="text-center text-red-500 text-2xl mt-10">Voiture non trouvée</h2>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-900 p-6">
      <div className="bg-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-lg text-center transform hover:scale-[1.02] transition duration-500">
        
        <h1 className="text-4xl font-extrabold mb-4 text-white">{car.title}</h1>

        <img 
          src={car.img}
          alt={car.title}
          className="mx-auto rounded-xl shadow-md w-full max-w-md mb-6 hover:scale-105 transition-transform duration-500"
        />

        <p className="text-white text-lg mb-3">
          {car.title} est de bonne qualité avec un prix convenable :{" "}
          <span className="font-semibold text-green-600">{car.price}</span>
        </p>

        <p className="text-white mb-6">{car.desc}</p>
        <div className=" flex gap-4">
        <Link to="/">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
            Retour à la page d'accueil
          </button>
           
        </Link>
        <Link to='/reservation'>
        <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
            Reserver maintenant
          </button>
          </Link>
          </div>
      </div>
    </div>
  );
}

export default Detail;
