import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { cars } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiAdminLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { SiFerrarinv, SiHyundai, SiPeugeot, SiRenault, SiMercedes } from "react-icons/si";
import marrakechVideo from "../assets/videpp.mp4";
import { FaWhatsappSquare, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const logos = [
    { icon: <SiRenault size={50} className="text-blue-400" /> },
    { icon: <SiFerrarinv size={50} className="text-yellow-400" /> },
    { icon: <SiPeugeot size={50} className="text-green-400" /> },
    { icon: <SiHyundai size={50} className="text-red-400" /> },
    { icon: <SiMercedes size={50} className="text-purple-400" /> },
    { icon: <SiRenault size={50} className="text-blue-400" /> },
    { icon: <SiFerrarinv size={50} className="text-yellow-400" /> },
    { icon: <SiPeugeot size={50} className="text-green-400" /> },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen text-gray-100 font-sans">

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-gray-900/70 backdrop-blur-md border-b border-gray-700/30 shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Car <span className="text-white">YASSIR</span> .🇲🇦
          </div>

          {/* Menu links desktop */}
          <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
            <li className="flex items-center gap-1 hover:text-blue-400 transition">
              <RiAdminLine /> <Link to="/admin">Admin</Link>
            </li>
          </ul>

          {/* Contact button */}
          <Link
            to="/contact"
            className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
          >
            Contact Us
          </Link>

          {/* Hamburger menu mobile */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900/90 px-6 py-4 space-y-4">
            <Link to="/contact" className="block text-gray-200 hover:text-blue-400 transition">Contact</Link>
            <Link to="/admin" className=" text-gray-200 hover:text-blue-400 transition flex items-center gap-1">
              <RiAdminLine /> Admin
            </Link>
            <Link
              to="/contact"
              className="block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition duration-300 mt-2"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>

      {/* Hero */}
      <div className="relative w-full h-[36rem] sm:h-[40rem] md:h-[50rem] flex items-center justify-center text-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={marrakechVideo} type="video/mp4" />
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30"></div>

        {/* Texte */}
        <div className="relative z-10 max-w-3xl px-6 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            Découvrez Votre Prochaine Aventure à Marrakech
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Louez la voiture parfaite pour explorer les merveilles du Maroc.
          </p>
          <a
            href="#car-list-section"
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-lg font-bold hover:scale-105 shadow-lg hover:shadow-yellow-500/40 transition"
          >
            Voir Nos Voitures
          </a>
        </div>
      </div>

      {/* Slider Logos */}
      <div className="bg-gray-950 py-10">
        <Slider {...sliderSettings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center px-4">
              {logo.icon}
            </div>
          ))}
        </Slider>
      </div>

      {/* Cartes voitures */}
      <div id="car-list-section" className="container mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400 mb-12">
          Nos Véhicules Disponibles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-gray-900/80 border border-gray-700 rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out flex flex-col h-full"
            >
              <img
                src={car.img}
                alt={car.title}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{car.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{car.desc}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-blue-400 text-xl font-bold">{car.price}</p>
                  <span className="text-gray-500 text-sm">/ jour</span>
                </div>
                <Link to={`/details/${car.id}`} className="mt-auto">
                  <button
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-blue-500/40"
                  >
                    Voir Détail
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-950 via-gray-900 to-black border-t border-gray-700 mt-12">
        <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-300">
          
          <div className="text-left">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Car <span className="text-white">YASSIR</span> .🇲🇦
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Découvrez nos véhicules de luxe et économiques pour profiter pleinement de vos voyages à Marrakech et partout au Maroc.
            </p>
          </div>

          <div className="flex flex-col items-end md:items-end">
            <h3 className="text-lg font-semibold text-white mb-3">Liens Rapides</h3>
            <ul className="space-y-2 text-gray-400 text-right">
              <li><Link to="/" className="hover:text-blue-400 transition">Accueil</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
              <li><Link to="/admin" className="hover:text-blue-400 transition">Espace Admin</Link></li>
              <li><a href="#car-list-section" className="hover:text-blue-400 transition">Nos Voitures</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-3">Suivez-nous</h3>
            <div className="flex gap-5 text-3xl">
              <a href="#" className="hover:text-pink-500 hover:scale-110 transition transform duration-700"><FaInstagram /></a>
              <a href="#" className="hover:text-green-500 hover:scale-110 transition transform duration-700"><FaWhatsappSquare /></a>
              <a href="#" className="hover:text-blue-500 hover:scale-110 transition transform duration-700"><FaFacebookSquare /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 py-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} 
          <div className="text-blue-500 flex justify-center font-bold gap-1">
            Car <div className="text-white">YASSIR</div> <div className="text-purple-700">.Ma</div>
          </div>
          Tous droits réservés. | Marrakech, Maroc.
        </div>
      </footer>
    </div>
  );
};

export default Home;
