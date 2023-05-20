import React, { useState } from 'react'
import Content from './app/content/Content'
import Header from './app/header/Header'

function Admin() {
  const [link, setLink] = useState("Produits")
  const handleClick=(lien)=>{
    setLink(lien)
  }
  return (
    <div>
        <Header handleClick={handleClick} />
        <Content link={link}/>
    </div>
  )
}

export default Admin