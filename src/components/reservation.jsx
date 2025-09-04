import { Link } from "react-router-dom"

function Reserver() {
    return(
        <div className="    bg-gray-900 p-6">
            <div class="max-w-lg mx-auto p-6 text-white rounded-lg shadow-md mt-10 bg-gray-800">
  <h2 class="text-2xl font-bold mb-6 text-center">Réserver une voiture</h2>
  
  <form action="/reservation" method="POST" class="space-y-4">
    
    <div>
      <label for="car" class="block text-white font-medium mb-1">Choisir une voiture</label>
      <select id="car" name="car" required class="w-full border bg-gray-800 p-2 rounded-md">
        <option value="">-- Sélectionnez une voiture --</option>
        <option value="ds4">DS4</option>
        <option value="bmw_x5">BMW X5</option>
        <option value="audi_a4">Audi A4</option>
      </select>
    </div>
    
    
    <div>
      <label for="name" class="block text-white font-medium mb-1">Nom complet</label>
      <input type="text" id="name" name="name" required placeholder="Votre nom"
             class="w-full border border-gray-300 p-2 rounded-md" />
    </div>
    
   
    <div>
      <label for="email" class="block text-white font-medium mb-1">Email</label>
      <input type="email" id="email" name="email" required placeholder="exemple@mail.com"
             class="w-full border border-gray-300 p-2 rounded-md" />
    </div>
    
    
    <div>
      <label for="phone" class="block text-white font-medium mb-1">Numéro de téléphone</label>
      <input type="tel" id="phone" name="phone" required placeholder="06 12 34 56 78"
             class="w-full border border-gray-300 p-2 rounded-md" />
    </div>
    
    
   <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div class="relative">
    <label for="start_date" class="block text-gray-700 font-semibold mb-2">Date de début</label>
    <input type="date" id="start_date" name="start_date" required
           class="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm hover:shadow-md" />
    <span class="absolute right-3 top-10 text-gray-400 pointer-events-none">
      📅
    </span>
  </div>

  
  <div class="relative">
    <label for="end_date" class="block text-gray-700 font-semibold mb-2">Date de fin</label>
    <input type="date" id="end_date" name="end_date" required
           class="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm hover:shadow-md" />
    <span class="absolute right-3 top-10 text-gray-400 pointer-events-none">
      📅
    </span>
  </div>
</div>

    
    <div class="text-center flex gap-4 justify-center">
      <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition transform hover:scale-105 duration-700">
        Réserver maintenant
      </button>
    
    <Link to='/'>
      <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition transform hover:scale-105 duration-700">
        retour a la page d'accueil
      </button>
      </Link>
    </div>
  </form>
</div>

        </div>
    )
}
export default Reserver