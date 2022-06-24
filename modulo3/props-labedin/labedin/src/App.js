import React from 'react';
import './App.css'
import CardGrande from './components/CardGrande/CardGrande'
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton'
import foto from './components/CardGrande/foto02.jpg'
import estrada from './components/CardPequeno/estrada.png'
import apontar from './components/CardGrande/apontar.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>

        <CardGrande 
          imagem= {foto} 
          nome="Fagner Fontes Batista" 
          descricao= "Sou Tecnico em Informatica, com o Curso de Análise de Sistemas trancado,  atualmente não exerço a profissão,mas com o intuíto de  permanecer na area da computação, estudo programação para web, mas especificamente o Curso de Full Stack "
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Fagner Fontes Batista" 
          descricao="Brasil Center Comunicação
          Atendente - de Junho/2011 a Outubro/2011
          Atendente passivo, solução de problemas demandados pelos clientes da empresa, entrada de dados no sistema, verificação de dados no sistema.
          
          Auxiliar/Operacional (Atend. a cliente - Telefonistas/Recepcionistas) - de 2011 a 2011
          Prefeitura Municipal de Belmonte
          
          Digitador - de Fevereiro/2002 a Junho/2010
          Fazer atas, ofícios, solicitação, pedidos de cotação, avisos e atendimento ao publico. Manutenção de Micorcomputadores.
          
          Auxiliar/Operacional (Administração Pública) - de 2002 a 2010
          Auxiliar/Operacional (Informática/T.I.) - de 2004 a 2010
          Auxiliar/Operacional (Secretariado) - de 2004 a 2010
          Virtual Net Telecomunicações Ltda
          EDITAR
          Tecnico em Informatica - de Outubro/2007 a Junho/2010
          Atendimento a clientes para diagnosticar e resolver problemas de Hardware ou Software.
          " 
        />

<div id = "CardPequeno">
     <h2>Endreço</h2>
            <CardPequeno
             rua = {"Cedrolandia"} numero = {12} email = {"ffontesbatistagmail.com"} bairro = {"Vale Encantado"} cidade  = {"Vila Vela"}  estado = {"Espirito Santo"} imagem = {estrada}/> 
          

     </div>
        
        <CardGrande 

          descricaoDefeitos="Dificuldade com trabalho + ou - 
            Persistência no objetivo desejado 
            Insatisfação com injustiças"
          
          imagem= {apontar}
           
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
        
    

      </div>
    </div>

   


  );
}

export default App;
