import React from 'react'
import { Route, Routes } from 'react-router'
import Commande from './commande/Commande'
import AddProduct from './produits/gestion/AddProduct'
import Produits from './produits/Produits'
import Profil from './profil/Profil'

function Content(props) {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Produits />} />
        <Route path='/produits' element={<Produits />} />
        <Route path='/commandes' element={<Commande />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/produits/ajout' element={<AddProduct />} />
        <Route path='*' element={<h1>page not found</h1>} />

      </Routes>


    </div>
  )
}

export default Content