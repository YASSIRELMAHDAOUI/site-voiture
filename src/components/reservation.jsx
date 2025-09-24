import { Link } from "react-router-dom";
import { useState } from "react";

function Reserver() {
  // state pour stocker les valeurs des inputs
  const [formData, setFormData] = useState({
    car: "",
    name: "",
    email: "",
    phone: "",
    start_date: "",
    end_date: "",
  });

  // fonction pour mettre à jour les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);

    // ici tu peux envoyer formData vers ton backend
    alert("Réservation envoyée avec succès ✅");
  };

  return (
    <div className="bg-gray-900 p-6">
      <div className="max-w-lg mx-auto p-6 text-white rounded-lg shadow-md mt-10 bg-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center border-transparent rounded-4xl p-4 bg-gradient-to-r from-blue-500 to-purple-500 w-70 mx-auto">
  Réserver une voiture
</h2>


        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Choisir voiture */}
          <div>
            <label
              htmlFor="car"
              className="block text-white font-medium mb-1"
            >
              Choisir une voiture
            </label>
            <select
              id="car"
              name="car"
              required
              value={formData.car}
              onChange={handleChange}
              className="w-full border bg-gray-800 p-2 rounded-md"
            >
              <option value="">-- Sélectionnez une voiture --</option>
              <option value="ds4">DS4</option>
              <option value="bmw_x5">BMW X5</option>
              <option value="audi_a4">Audi A4</option>
            </select>
          </div>

          {/* Nom complet */}
          <div>
            <label
              htmlFor="name"
              className="block text-white font-medium mb-1"
            >
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-white font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="exemple@mail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md text-white"
            />
          </div>

          {/* Téléphone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-white font-medium mb-1"
            >
              Numéro de téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="06 12 34 56 78"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md text-white"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label
                htmlFor="start_date"
                className="block text-white font-semibold mb-2"
              >
                Date de début
              </label>
              <input
                type="date"
                id="start_date"
                name="start_date"
                required
                value={formData.start_date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm hover:shadow-md"
              />
              <span className="absolute right-3 top-10 text-white pointer-events-none">
                📅
              </span>
            </div>

            <div className="relative">
              <label
                htmlFor="end_date"
                className="block text-gray-200 font-semibold mb-2"
              >
                Date de fin
              </label>
              <input
                type="date"
                id="end_date"
                name="end_date"
                required
                value={formData.end_date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm hover:shadow-md"
              />
              <span className="absolute right-3 top-10 text-gray-400 pointer-events-none">
                📅
              </span>
            </div>
          </div>

          {/* Boutons */}
          <div className="text-center flex gap-4 justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition transform hover:scale-105 duration-700"
            >
              Réserver maintenant
            </button>

            <Link to="/">
              <button
                type="button"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition transform hover:scale-105 duration-700"
              >
                Retour à la page d'accueil
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reserver;
