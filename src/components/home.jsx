import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaCar, FaTaxi, FaBus, FaTruck, FaMotorcycle } from "react-icons/fa";
import { cars } from "./data"; // Vérifie bien que tes voitures sont importées
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import de la vidéo depuis assets
import marrakechVideo from "../assets/videpp.mp4";

const Home = () => {
  // Liste des icônes pour le slider
  const logos = [
    { icon: <FaCar size={50} className="text-blue-400" /> },
    { icon: <FaTaxi size={50} className="text-yellow-400" /> },
    { icon: <FaBus size={50} className="text-green-400" /> },
    { icon: <FaTruck size={50} className="text-red-400" /> },
    { icon: <FaMotorcycle size={50} className="text-purple-400" /> },
    { icon: <FaCar size={50} className="text-blue-400" /> },
    { icon: <FaTaxi size={50} className="text-yellow-400" /> },
    { icon: <FaBus size={50} className="text-green-400" /> },
  ];

  // Paramètres du slider
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-gray-100 font-sans">
      
      {/* Navbar */}
      <nav className="bg-gray-800 bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-5">
          <div className="text-3xl font-extrabold text-blue-400">
            Car <span className="text-white">YASSIR</span> .🇲🇦
          </div>
          <div>
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section avec vidéo */}
      <div className="relative h-[32rem] flex items-center justify-center text-center p-4 overflow-hidden">
        {/* Vidéo en background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={marrakechVideo} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Texte au-dessus */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-down">
            Découvrez Votre Prochaine Aventure à Marrakech
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up">
            Louez la voiture parfaite pour explorer les merveilles du Maroc.
          </p>
          <a
            href="#car-list-section"
            className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-full text-lg font-bold hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Voir Nos Voitures
          </a>
        </div>
      </div>

      {/* Slider des logos */}
      <div className="py-10 bg-gray-900">
        <Slider {...sliderSettings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              {logo.icon}
            </div>
          ))}
        </Slider>
      </div>

      {/* Section des voitures */}
      <div id="car-list-section" className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Nos Véhicules Disponibles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-xl 
                         transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out 
                         flex flex-col h-full"
            >
              <img
                src={car.img}
                alt={car.title}
                className="w-full h-56 object-cover object-center rounded-t-xl"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{car.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{car.desc}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-blue-400 text-xl font-bold">{car.price}</p>
                  <span className="text-gray-500 text-sm">/ jour</span>
                </div>
                <Link to={`/details/${car.id}`} className="mt-auto">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg 
                                     transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md">
                    Voir Détail
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 bg-opacity-70 text-gray-400 text-center p-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Car Rental. Tous droits réservés. | Marrakech, Maroc.</p>
      </footer>
    </div>
  );
};

export default Home;
