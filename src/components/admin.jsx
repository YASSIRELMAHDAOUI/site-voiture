import React from "react";
import { Link } from "react-router-dom";
function AdminModern() {
  return (
    <div className="flex h-screen bg-gray-100 ">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-8"> Admin</h1>
        <nav className="flex flex-col gap-4">
          <a href="#" className="hover:bg-white/20 rounded px-3 py-2">Listes Réservations</a>
          <a href="#" className="hover:bg-white/20 rounded px-3 py-2">Listes Voitures</a>
        </nav>
      </aside>

      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="bg-white shadow rounded-xl p-4 mb-6 flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <h2 className="text-xl font-bold">Bienvenue, Admin 👋</h2>
          <Link to="/">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              retourner au site
            </button></Link>
          
        </div>

       
       
      </div>
    </div>
  );
}

export default AdminModern;
