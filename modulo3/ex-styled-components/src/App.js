
import React from 'react'
import './App.css'
import Formulario2 from './Formulario2.js'
import Formulario1 from './Formulario1'
import Logo from './quadrinho.png'


function MeuFormulario(){

  
 return (

  <div className='principal'>
    <img src={Logo}/>
      <div className='item1'>1</div>
      <div className='item2'>2</div>
          <Formulario1/>
           <Formulario2/>
    
      <div className='item3'>Fagner Fontes Batista todos os direitos reserdos copyright</div>
 
    
  </div>



   
  )
}
export default MeuFormulario




