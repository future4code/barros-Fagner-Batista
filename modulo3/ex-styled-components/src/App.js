
import React from 'react'
import './App.css'
import Formulario2 from './Formulario2.js'
import Formulario1 from './Formulario1'
import Logo from './quadrinho.png'


function MeuFormulario(){

  
 return (

  <div className='principal'>
   <img src={Logo}/>
      <div className='item1'></div>
      <div className='item2'></div>

      <div className='formularios'>
          <Formulario1/>
           <Formulario2/>     
      </div>
        
        
      <div className='rodape'> Fagner Fontes Batista, todos os direitos reservados  Copyright</div>
  
    
  </div>



   
  )
}
export default MeuFormulario




