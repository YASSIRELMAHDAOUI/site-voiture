import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sms, setSms] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setSms(`Merci ${nom} ! Votre message a bien été envoyé ✅`);
    setTimeout(() => {
      setSms("");
    }, 4000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen text-gray-100 flex items-center justify-center p-6 relative">
      {/* Effet glow */}
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 via-purple-500/5 to-transparent blur-3xl"></div>

      <div className="relative w-full max-w-lg bg-gray-900/70 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl p-10">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
          Contactez-nous
        </h2>

        {sms && (
          <p className="mb-6 p-4 text-green-100 bg-green-600/80 text-center rounded-lg shadow-md animate-fade-in">
            {sms}
          </p>
        )}

        <form>
          {/* Nom */}
          <div className="mb-6">
            <label htmlFor="name" className="block font-medium text-gray-300 mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Entrez votre nom"
              required
              className="w-full px-4 py-3 bg-gray-800/70 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
              required
              className="w-full px-4 py-3 bg-gray-800/70 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Écrivez votre message ici..."
              required
              className="w-full px-4 py-3 bg-gray-800/70 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            ></textarea>
          </div>

          {/* Bouton envoyer */}
          <button
            type="submit"
            onClick={handleClick}
            className="w-full py-3 rounded-lg font-semibold shadow-lg 
                       bg-gradient-to-r from-blue-500 to-purple-600 
                       hover:from-blue-600 hover:to-purple-700 
                       text-white transition duration-300 
                       transform hover:scale-105 hover:shadow-blue-500/30"
          >
            Envoyer
          </button>

          {/* Retour accueil */}
          <Link
            to="/"
            className="block text-center mt-5 py-2 rounded-lg font-medium 
                       bg-gradient-to-r from-gray-700 to-gray-900 
                       hover:from-gray-600 hover:to-gray-800 
                       text-gray-200 transition duration-300 
                       transform hover:scale-105 shadow-md"
          >
            Retour à la page d'accueil
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
