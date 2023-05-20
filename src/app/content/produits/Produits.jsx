import React from 'react'
import ProductsTable from './gestion/ProductsTable'

function Produits() {
    return (
        <div className='container mt-5'>
            <a className='btn btn-outline-primary' href="/produits/ajout">ajouter</a>
            <ProductsTable/>
        </div>
    )
}

export default Produits