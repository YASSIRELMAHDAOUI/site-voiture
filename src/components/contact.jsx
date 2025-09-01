import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sms, setSms] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setSms(`${nom} ${email} ${message} : envoyé avec succès !`);
    setTimeout(() => {
      setSms("");
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
          Contactez-nous
        </h2>

        {sms && (
          <p className="mb-4 p-3 text-green-100 bg-green-600 text-center rounded-lg shadow-md">
            {sms}
          </p>
        )}

        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-300 mb-1">
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Entrez votre nom"
              required
              className="w-full px-4 py-2 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
              required
              className="w-full px-4 py-2 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Écrivez votre message ici..."
              required
              className="w-full px-4 py-2 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={handleClick}
            className="w-full bg-blue-500 text-gray-900 font-semibold py-3 rounded-lg hover: bg-blue-500 transition duration-300 shadow-md transform hover:scale-105 transition duration-700 "
          >
            Envoyer
          </button>

          <Link
            to="/"
            className="block text-center mt-4 bg-blue-500 rounded-3xl transform hover:scale-105 transition duration-700 p-2 text-gray-900"

          >
            Retour à la page d'accueil
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
